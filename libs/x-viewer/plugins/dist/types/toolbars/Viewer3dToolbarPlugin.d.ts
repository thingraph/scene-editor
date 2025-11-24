import { Plugin, type BaseViewer, PluginConfig } from "@x-viewer/core";
import { Toolbar } from "./Toolbar";
import { ToolbarConfig, ToolbarMenuId } from "./Toolbar.constants";
/**
 * Viewer3d toolbar plugin config.
 */
export interface Viewer3dToolbarPluginConfig extends Partial<PluginConfig> {
    language?: "cn" | "en";
    menuConfig: ToolbarConfig;
    groupConfig?: ToolbarMenuId[][] | string[][];
}
/**
 * Viewer3d toolbar plugin.
 */
export declare class Viewer3dToolbarPlugin extends Plugin {
    static readonly DEFAULT_ID = "Viewer3dToolbarPlugin";
    protected cfg: Viewer3dToolbarPluginConfig;
    private toolbar;
    constructor(viewer: BaseViewer, cfg?: Viewer3dToolbarPluginConfig);
    private initLocalization;
    getToolbar(): Toolbar;
    /**
     * Sets a menu item to be active or inactive.
     */
    setActive(menuId: string, active: boolean): void;
    /**
     * Gets if a menu item is active.
     */
    isActive(menuId: string): boolean;
    /**
     * When taking a screenshot, user may want to set a custom filename.
     * If not set, it will be "download", so the file is "download.png" or "download.jpg".
     * @param filename The filename, e.g., "thumbnail".
     */
    setScreenshotDownloadFileName(filename: string): void;
    destroy(): void;
}
