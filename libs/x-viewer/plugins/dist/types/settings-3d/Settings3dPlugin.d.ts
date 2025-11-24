import { Viewer3d, Plugin, PluginConfig } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
/**
 * Setting 3d plugin.
 */
export interface Settings3dPluginConfig extends Partial<PluginConfig> {
    /**
     * Container div id.
     */
    containerId?: string;
    /**
     * If panel is visible. It is visible by default.
     */
    visible?: boolean;
    language?: "cn" | "en";
}
/**
 * Setting 3d plugin events.
 */
type Settings3dPluginEvents = {
    /**
     * Panel visibility change event.
     */
    visibilitychange: boolean;
};
/**
 * Setting 3d.
 * Can be used by Viewer3d.
 */
export declare class Settings3dPlugin extends Plugin<Settings3dPluginEvents> {
    static readonly DEFAULT_ID = "Settings3dPlugin";
    protected cfg: Settings3dPluginConfig;
    protected basePanel?: BasePanel;
    protected container?: HTMLDivElement;
    protected content?: HTMLDivElement;
    private skyboxPlugin;
    private groundGridPlugin;
    private groundShadowPlugin;
    private viewCubePlugin;
    private axisGizmoPlugin;
    constructor(viewer: Viewer3d, cfg?: Settings3dPluginConfig);
    protected init(): void;
    private initLocalization;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    private onClose;
    destroy(): void;
    addContent(): void;
    protected addEventHandlers(): void;
}
export {};
