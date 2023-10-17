import { clipboard, ipcMain, nativeImage } from "electron"
import path from "path"

const sharp = require("sharp")

import util from "util"
import fs from "fs"

// 将 fs.mkdir 转换为返回 Promise 的函数
const mkdir = util.promisify(fs.mkdir)

// 定义目标尺寸
const sizes = [100, 320, 640, 768, 1024, 1280, 1600, 2000]

const isImage = (s: string) => {
    const path = s.toLowerCase()
    return path.endsWith(".png") || path.endsWith(".jpg") || path.endsWith(".jpeg") || path.endsWith(".gif") || path.endsWith(".bmp")
}

export const setupIPC = () => {
    ipcMain.on("resizeImage", async (event, imgPath, targetDir) => {
        const img = sharp(imgPath)
        const { width, height } = await img.metadata()

        for (let i = 0; i < sizes.length; i++) {
            const size = sizes[i]
            const newRoot = path.join(targetDir, "w" + size)
            const newPath = path.join(newRoot, path.basename(imgPath, path.extname(imgPath)) + ".webp")

            await mkdir(newRoot, { recursive: true })

            if (width > size) {  // 只有当图片的原始宽度大于目标尺寸时才进行缩放
                const newHeight = Math.round(height * size / width)
                await img.resize(size, newHeight).webp().toFile(newPath)
            } else {
                await img.webp().toFile(newPath)
            }

            // 计算并发送进度
            const progress = Math.round((i + 1) / sizes.length * 100)
            event.sender.send("resizeProgress", progress)
        }
    })

    ipcMain.on("readClipboardImage", async (event) => {
        let imageFilePath = clipboard.read("public.file-url")
        if (!imageFilePath) {
            const a = clipboard.readImage()
            if (a.isEmpty()) {
                return null
            }
            return a.toPNG()
        }
        if (!isImage(imageFilePath)) {
            return null
        }
        const image = nativeImage.createFromPath(imageFilePath.replace("file://", ""))
        console.log("read clipboard image")
        return image.toPNG()
    })
}
