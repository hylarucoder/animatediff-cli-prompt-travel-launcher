import fs from "fs"
import path from "path"
import util from "util"
import crypto from "crypto"
import { clipboard } from "electron"

const sharp = require("sharp")

function md5Hash(buffer: any) {
    const hash = crypto.createHash("md5")
    hash.update(buffer)
    return hash.digest("hex")
}

const mkdir = util.promisify(fs.mkdir)

const sizes = [100, 320, 640, 768, 1024, 1280, 1600, 2000]

const getMonthDir = () => {
    const date = new Date() // 获取当前日期和时间
    const year = date.getFullYear() // 获取年份
    let month = `${date.getMonth() + 1}` // 获取月份（注意：月份是从 0 开始的，所以我们需要加 1）
    if (month.length === 1) {
        month = `0${month}`
    }
    return (year + "/" + month) // 输出 "yyyy/mm"
}

export async function resizeAndSaveImage(buffer: any, targetDir: string) {
    const img = sharp(buffer)
    const { width, height } = await img.metadata()
    const md5 = md5Hash(buffer)

    for (let size of sizes) {
        const newRoot = path.join(targetDir + "/size/" + getMonthDir() + "/", "w" + size)
        const newPath = path.join(newRoot, md5 + ".webp")
        await mkdir(newRoot, { recursive: true })
        if (!width || !height) {
            continue
        }
        if (width > size) {  // 只有当图片的原始宽度大于目标尺寸时才进行缩放
            const newHeight = Math.round(height * size / width)
            await img.resize(size, newHeight).webp().toFile(newPath)
        } else {
            await img.webp().toFile(newPath)
        }
    }
    const nr = targetDir + "/content/" + getMonthDir() + "/"
    const line = `https://image.simpleaiart.com/size/` + getMonthDir() + `/w1280/${md5}.webp`
    clipboard.writeText(line)
    console.log("nr", nr)
    await mkdir(nr, { recursive: true })
    await img.jpeg().toFile(nr + "/" + md5 + ".jpg")
}

