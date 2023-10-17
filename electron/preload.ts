// import { contextBridge, ipcRenderer } from "electron"

console.log("---- electron/preload.ts ----")


// export const electronBridge = {
//     ipcRenderer: ipcRenderer,
//     send: (channel, data) => {
//         ipcRenderer.send(channel, data)
//     },
//     on: (channel, func) => {
//         ipcRenderer.on(channel, (event, ...args) => func(...args))
//     },
//     off: (channel, func) => {
//         ipcRenderer.removeListener(channel, (event, ...args) => func(...args))
//     },
//     versions: {
//         node: () => process.versions.node,
//         chrome: () => process.versions.chrome,
//         electron: () => process.versions.electron,
//         // we can also expose variables, not just functions
//     },
//     startResize: (imgPath, targetDir) => ipcRenderer.send("resizeImage", imgPath, targetDir),
//     onProgress: (callback) => {
//         ipcRenderer.once("resizeProgress", (event, progress) => callback(progress))
//     },
// }
//
// export type ElectronBridge = typeof electronBridge;
//
// contextBridge.exposeInMainWorld("electron", electronBridge)
//
