import {app, BrowserWindow, Menu, MenuItemConstructorOptions, shell} from "electron";
import {autoUpdater} from "electron-updater";
import {isDev} from "./utils/env";
import {isMacOS} from "./utils/platform";

interface DarwinMenuItemConstructorOptions extends MenuItemConstructorOptions {
    selector?: string;
    submenu?: DarwinMenuItemConstructorOptions[] | Menu;
}

export default class MenuBuilder {
    mainWindow: BrowserWindow;

    constructor(mainWindow: BrowserWindow) {
        this.mainWindow = mainWindow;
    }

    buildMenu(): Menu {
        if (isDev()) {
            this.setupDevelopmentEnvironment();
        }

        const template = isMacOS() ? this.buildDarwinTemplate() : this.buildDefaultTemplate();

        const menu = Menu.buildFromTemplate(template);
        Menu.setApplicationMenu(menu);

        return menu;
    }

    setupDevelopmentEnvironment(): void {
        this.mainWindow.webContents.on("context-menu", (_, props) => {
            const {x, y} = props;

            Menu.buildFromTemplate([
                {
                    label: "Inspect element",
                    click: () => {
                        this.mainWindow.webContents.inspectElement(x, y);
                    },
                },
            ]).popup({window: this.mainWindow});
        });
    }

    buildDarwinTemplate(): MenuItemConstructorOptions[] {
        const subMenuAbout: DarwinMenuItemConstructorOptions = {
            label: "谛听AI",
            submenu: [
                {
                    label: "关于",
                    selector: "orderFrontStandardAboutPanel:",
                },
                {
                    label: "检查更新",
                    click: () => {
                        autoUpdater.checkForUpdates();
                    },
                },
                {type: "separator"},
                {label: "Services", submenu: []},
                {type: "separator"},
                {
                    label: "隐藏",
                    accelerator: "Command+H",
                    selector: "hide:",
                },
                {
                    label: "Hide Others",
                    accelerator: "Command+Shift+H",
                    selector: "hideOtherApplications:",
                },
                {label: "Show All", selector: "unhideAllApplications:"},
                {type: "separator"},
                {
                    label: "退出",
                    accelerator: "Command+Q",
                    click: () => {
                        app.quit();
                    },
                },
            ],
        };
        const subMenuEdit: DarwinMenuItemConstructorOptions = {
            label: "编辑",
            submenu: [
                {label: "Undo", accelerator: "Command+Z", selector: "undo:"},
                {label: "Redo", accelerator: "Shift+Command+Z", selector: "redo:"},
                {type: "separator"},
                {label: "Cut", accelerator: "Command+X", selector: "cut:"},
                {label: "Copy", accelerator: "Command+C", selector: "copy:"},
                {label: "Paste", accelerator: "Command+V", selector: "paste:"},
                {
                    label: "Select All",
                    accelerator: "Command+A",
                    selector: "selectAll:",
                },
            ],
        };
        const subMenuViewDev: MenuItemConstructorOptions = {
            label: "视图",
            submenu: [
                {
                    label: "Reload",
                    accelerator: "Command+R",
                    click: () => {
                        this.mainWindow.webContents.reload();
                    },
                },
                {
                    label: "Toggle Full Screen",
                    accelerator: "Ctrl+Command+F",
                    click: () => {
                        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                    },
                },
                {
                    label: "Toggle Developer Tools",
                    accelerator: "Alt+Command+I",
                    click: () => {
                        this.mainWindow.webContents.toggleDevTools();
                    },
                },
            ],
        };
        const subMenuViewProd: MenuItemConstructorOptions = {
            label: "视图",
            submenu: [
                {
                    label: "Toggle Full Screen",
                    accelerator: "Ctrl+Command+F",
                    click: () => {
                        this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                    },
                },
            ],
        };
        const subMenuWindow: DarwinMenuItemConstructorOptions = {
            label: "窗口",
            submenu: [
                {
                    label: "Minimize",
                    accelerator: "Command+M",
                    selector: "performMiniaturize:",
                },
                {label: "Close", accelerator: "Command+W", selector: "performClose:"},
                {type: "separator"},
                {label: "Bring All to Front", selector: "arrangeInFront:"},
            ],
        };
        const subMenuHelp: MenuItemConstructorOptions = {
            label: "帮助",
            submenu: [
                {
                    label: "翻译",
                    async click() {
                    },
                },
                {
                    label: "Learn More",
                    click() {
                        shell.openExternal("https://electronjs.org");
                    },
                },
                {
                    label: "Documentation",
                    click() {
                        shell.openExternal("https://github.com/electron/electron/tree/master/docs#readme");
                    },
                },
                {
                    label: "Community Discussions",
                    click() {
                        shell.openExternal("https://www.electronjs.org/community");
                    },
                },
                {
                    label: "Search Issues",
                    click() {
                        shell.openExternal("https://github.com/electron/electron/issues");
                    },
                },
            ],
        };

        const subMenuView = isDev() ? subMenuViewDev : subMenuViewProd;

        return [subMenuAbout, subMenuEdit, subMenuView, subMenuWindow, subMenuHelp];
    }

    buildDefaultTemplate() {
        return [
            {
                label: "&File",
                submenu: [
                    {
                        label: "&Open",
                        accelerator: "Ctrl+O",
                    },
                    {
                        label: "&Whisper",
                        click: () => {
                        },
                    },
                    {
                        label: "&Close",
                        accelerator: "Ctrl+W",
                        click: () => {
                            this.mainWindow.close();
                        },
                    },
                ],
            },
            {
                label: "&View",
                submenu: isDev()
                    ? [
                        {
                            label: "&Reload",
                            accelerator: "Ctrl+R",
                            click: () => {
                                this.mainWindow.webContents.reload();
                            },
                        },
                        {
                            label: "Toggle &Full Screen",
                            accelerator: "F11",
                            click: () => {
                                this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                            },
                        },
                        {
                            label: "Toggle &Developer Tools",
                            accelerator: "Alt+Ctrl+I",
                            click: () => {
                                this.mainWindow.webContents.toggleDevTools();
                            },
                        },
                    ]
                    : [
                        {
                            label: "Toggle &Full Screen",
                            accelerator: "F11",
                            click: () => {
                                this.mainWindow.setFullScreen(!this.mainWindow.isFullScreen());
                            },
                        },
                    ],
            },
            {
                label: "Help",
                submenu: [
                    {
                        label: "Learn More",
                        click() {
                            shell.openExternal("https://electronjs.org");
                        },
                    },
                    {
                        label: "Documentation",
                        click() {
                            shell.openExternal("https://github.com/electron/electron/tree/master/docs#readme");
                        },
                    },
                    {
                        label: "Community Discussions",
                        click() {
                            shell.openExternal("https://www.electronjs.org/community");
                        },
                    },
                    {
                        label: "Search Issues",
                        click() {
                            shell.openExternal("https://github.com/electron/electron/issues");
                        },
                    },
                ],
            },
        ];
    }
}
