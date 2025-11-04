import { Plugin, type BaseViewer, PluginConfig } from "@x-viewer/core";
import { Toolbar } from "./Toolbar";
import { ToolbarConfig, ToolbarMenuId } from "./Toolbar.constants";
/**
 * Viewer2d toolbar plugin config.
 */
export interface Viewer2dToolbarPluginConfig extends Partial<PluginConfig> {
    language?: "cn" | "en";
    menuConfig: ToolbarConfig;
    groupConfig?: ToolbarMenuId[][] | string[][];
    markupMenuCfg?: ToolbarConfig;
    markupGroupCfg?: ToolbarMenuId[][] | string[][];
}
/**
 * Viewer2d toolbar plugin.
 */
export declare class Viewer2dToolbarPlugin extends Plugin {
    static readonly DEFAULT_ID = "Viewer2dToolbarPlugin";
    protected cfg: Viewer2dToolbarPluginConfig;
    protected toolbar: Toolbar;
    protected markupToolbar?: Toolbar;
    constructor(viewer: BaseViewer, cfg?: Viewer2dToolbarPluginConfig);
    private initLocalization;
    getToolbar(): Toolbar;
    getMarkupToolbar(): Toolbar | undefined;
    /**
     * Sets a menu item to be active or inactive.
     */
    setActive(menuId: string, active: boolean): void;
    /**
     * Gets if a menu item is active.
     */
    isActive(menuId: string): boolean;
    protected onMarkupActivated: () => void;
    protected onMarkupDeactivated: () => void;
    destroy(): void;
}
