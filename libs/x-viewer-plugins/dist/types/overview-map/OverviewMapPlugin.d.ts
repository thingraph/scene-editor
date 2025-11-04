import { THREE, ViewerEvent, Plugin, PluginConfig, BaseViewer } from "@x-viewer/core";
import { OverviewMapViewer } from "./OverviewMapViewer";
export interface OverviewMapPluginConfig extends Partial<PluginConfig> {
    containerId: string;
    image: string;
    min: THREE.Vector3;
    max: THREE.Vector3;
}
export declare class OverviewMapPlugin extends Plugin<Record<ViewerEvent, any>> {
    static readonly DEFAULT_ID = "OverviewMapPlugin";
    private cfg;
    mapViewer: OverviewMapViewer;
    constructor(viewer: BaseViewer, cfg: OverviewMapPluginConfig);
    get inputManager(): import("@x-viewer/core").InputManager;
    private initEvents;
}
