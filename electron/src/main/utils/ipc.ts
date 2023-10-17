import { BrowserWindow, ipcMain } from "electron";
import { getCookiesFromPartition } from "./utils";
import { store } from "../store";
import { autoUpdater } from "electron-updater";

export function registerIpcMain() {
  ipcMain.handle("RemoteGetPartitionCookies", async (_, key) => {
    return await getCookiesFromPartition(key);
  });
  ipcMain.handle("getStoreValue", (_, key) => {
    return store.get(key);
  });
  ipcMain.handle("setStoreValue", (_, key, value) => {
    return store.set(key, value);
  });
  ipcMain.handle("resetStoreValue", (_, key) => {
    return store.reset(key);
  });
  ipcMain.handle("quitAndInstall", (_) => {
    autoUpdater.quitAndInstall();
  });
  ipcMain.handle("resizeWindow", (_, { x, y }) => {
    BrowserWindow.getFocusedWindow()?.setSize(x, y);
  });
}
