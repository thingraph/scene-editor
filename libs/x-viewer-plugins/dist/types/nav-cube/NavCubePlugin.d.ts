import { type BaseViewer, Plugin, PluginConfig, THREE, THREEAddons } from "@x-viewer/core";
import { NavCube } from "./NavCube";
/**
 * ViewCube plugin config.
 */
export interface NavCubePluginConfig extends Partial<PluginConfig> {
    containerId: string;
    language?: "cn" | "en";
}
/**
 * This renderer monitors the host renderer's camera, and keeps a NavCube
 * the same direction as host renderer's
 */
export declare class NavCubePlugin extends Plugin {
    static readonly DEFAULT_ID = "NavCubePlugin";
    protected cfg: NavCubePluginConfig;
    protected renderer?: THREEAddons.CSS3DRenderer;
    protected navCube?: NavCube;
    protected camera?: THREE.OrthographicCamera;
    protected scene?: THREE.Scene;
    constructor(viewer: BaseViewer, cfg?: NavCubePluginConfig);
    protected init(): void;
    private initLocalization;
    protected initRenderer(): void;
    protected initScene(): void;
    protected render(): void;
    protected animate(): void;
    protected update(): void;
    /**
     * Update navCube according to camera direction.
     * Camera's direction is the only input factor for this class. It always look at the origin.
     * @param direction
     */
    protected updateCameraDirection(direction: THREE.Vector3, up: THREE.Vector3): void;
    destroy(): void;
}
