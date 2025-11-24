import { type BaseViewer, Plugin, PluginConfig } from "@x-viewer/core";
export interface ViewCubePluginConfig extends Partial<PluginConfig> {
    containerId?: string;
    language?: "cn" | "en";
    showAxes?: boolean;
    lineColor?: number;
}
export declare class ViewCubePlugin extends Plugin {
    static readonly DEFAULT_ID = "ViewCubePlugin";
    /**
     * @internal
     */
    private cfg;
    private container;
    private scene?;
    private camera?;
    private renderer?;
    private directionalLight?;
    private width;
    private height;
    private requestAnimationFrameHandle?;
    private pickManager;
    private renderEnabled;
    private inputManager?;
    private viewCube?;
    private lastCoords?;
    constructor(viewer: BaseViewer, cfg?: ViewCubePluginConfig);
    get viewerContainer(): HTMLElement;
    private init;
    private initLocalization;
    private initScene;
    private initCamera;
    private initRenderer;
    private initLights;
    private initViewCube;
    private initEvents;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    private onPointerDown;
    private onPointerMove;
    private onPointerleave;
    private onClick;
    private updateViewerCamera;
    private updateActivateMeshName;
    private updateCameraAndMeshName;
    /**
     * Update viewCube according to camera direction.
     * Camera's direction is the only input factor for this class. It always look at the origin.
     * @param direction
     */
    private updateCameraDirection;
    private animate;
    private zoomToBBox;
    destroy(): void;
}
