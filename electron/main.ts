import { join } from "path"
import { app, BrowserWindow } from "electron"
import { setupIPC } from "./ipcEvent"

process.env.DIST = join(__dirname, "../dist")
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, "../public")

let win: BrowserWindow | null
// Here, you can also use other preload
const preload = join(__dirname, "./preload.js")
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const url = process.env["VITE_DEV_SERVER_URL"]

function setupMainWindow() {
    win = new BrowserWindow({
        icon: join(process.env.PUBLIC, "logo.svg"),
        titleBarStyle: "hidden",
        width: 1280,
        height: 800,
        webPreferences: {
            contextIsolation: false,
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            preload,
        },
    })

    // Test active push message to Renderer-process.
    win.webContents.on("did-finish-load", () => {
        win?.webContents.send("main-process-message", new Date().toLocaleString())
    })

    if (url) {
        win.loadURL(url)
    } else {
        // win.loadFile('dist/index.html')
        win.loadFile(join(process.env.DIST, "index.html"))
    }

}

function setupLogging() {

}

function createApp() {
    setupMainWindow()
    setupLogging()
    setupIPC()
}

app.on("window-all-closed", () => {
    win = null
})

app.whenReady().then(createApp)

