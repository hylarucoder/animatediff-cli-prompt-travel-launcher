import {contextBridge, ipcRenderer} from "electron";
import {TestWhisper} from "../main/libwhisper";



export const electronBridge = {
    ipcRenderer: ipcRenderer,
    send: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    on: (channel, func) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
    off: (channel, func) => {
        ipcRenderer.removeListener(channel, (event, ...args) => func(...args));
    },
    versions: {
        node: () => process.versions.node,
        chrome: () => process.versions.chrome,
        electron: () => process.versions.electron,
        // we can also expose variables, not just functions
    },
    testWhisper: async (modelPath: string, wavPath: string) => {
        return await TestWhisper(modelPath, wavPath)
    }
};

export type ElectronBridge = typeof electronBridge;

contextBridge.exposeInMainWorld("electronBridge", electronBridge);

