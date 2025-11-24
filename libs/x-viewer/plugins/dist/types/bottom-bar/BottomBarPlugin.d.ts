import { IconClass, BaseViewer, Plugin } from "@x-viewer/core";
import { Tooltip } from "@x-viewer/ui";
declare enum BottomBarItemId {
    statistics = "x-viewer-threejs-statistics",
    cameraCfg = "x-viewer-threejs-cameraCfg",
    tips = "x-viewer-threejs-tips"
}
interface BottomBarItemConfig {
    icon: IconClass;
    mutexIds?: BottomBarItemId[];
    onActive?: (item: BottomBarItem) => void;
    onDeactive?: (item: BottomBarItem) => void;
    onClick?: (item: BottomBarItem) => void;
    onUpdate?: (item: BottomBarItem) => void;
}
/**
 * Bottom bar plugin is a debug tool for developers.
 */
export declare class BottomBarPlugin extends Plugin {
    private element;
    itemList: Map<string, BottomBarItem>;
    constructor(viewer: BaseViewer);
    update(): void;
    private init;
    private createItem;
}
declare class BottomBarItem {
    readonly viewer: BaseViewer;
    private readonly bottomBar;
    protected readonly menuId: string;
    protected cfg: BottomBarItemConfig;
    private eventBus;
    private itemconfig;
    tooltip: Tooltip;
    element: HTMLElement;
    active: boolean;
    constructor(viewer: BaseViewer, bottomBar: BottomBarPlugin, menuId: string, cfg: BottomBarItemConfig);
    private createButton;
    setActive(active: boolean): void;
    update(): void;
}
export {};
