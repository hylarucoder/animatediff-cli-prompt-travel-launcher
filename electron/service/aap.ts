import { clipboard } from "electron"
import fs from "fs"
import path from "path"


const readAndSaveImage = (
  savePath: string,
) => {
  const image = clipboard.readImage()
  if (image.isEmpty()) {
    throw Error("is empty")
  }
  const pngImage = image.toPNG()
  fs.writeFile(path.join(savePath, "image.png"), pngImage, (err) => {
    if (err) throw err
    console.log("Image saved!")
  })
  const blob = new Blob([buffer], { type: "image/png" })
  const reader = new FileReader()
  reader.onload = function(e) {
    const img = document.getElementById("clipboard-image")
    img.src = e.target.result
  }
  reader.readAsDataURL(blob)
  return pngImage
}

