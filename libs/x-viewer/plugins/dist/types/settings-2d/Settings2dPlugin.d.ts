import { Viewer2d, Plugin, PluginConfig, THREE } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
/**
 * Setting 2d plugin.
 */
export interface Settings2dPluginConfig extends Partial<PluginConfig> {
    /**
     * Container div id.
     */
    containerId: string;
    /**
     * If panel is visible. It is visible by default.
     */
    visible?: boolean;
    language?: "cn" | "en";
}
/**
 * Setting 2d plugin events.
 */
type Settings2dPluginEvents = {
    /**
     * Panel visibility change event.
     */
    visibilitychange: boolean;
};
/**
 * Setting 2d.
 * Can be used by Viewer2d.
 */
export declare class Settings2dPlugin extends Plugin<Settings2dPluginEvents> {
    static readonly DEFAULT_ID = "Settings2dPlugin";
    protected cfg: Settings2dPluginConfig;
    protected basePanel?: BasePanel;
    protected container?: HTMLDivElement;
    protected content?: HTMLDivElement;
    constructor(viewer: Viewer2d, cfg?: Settings2dPluginConfig);
    protected init(): void;
    private initLocalization;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    private onClose;
    destroy(): void;
    addContent(): void;
    protected addEventHandlers(): void;
    /**
     * Converts hex number in format "#ffffff" to rgb object.
     */
    convertHexToRGB(hex: any): {
        r: number;
        g: number;
        b: number;
    };
    setBackgroundColor(rgb: THREE.Color): void;
}
export {};
