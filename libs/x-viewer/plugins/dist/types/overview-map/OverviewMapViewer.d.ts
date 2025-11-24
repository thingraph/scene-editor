import { BaseViewer, BaseViewerConfig, Drawable, EventInfo, Model, ModelConfig, THREE, ViewerEvent } from "@x-viewer/core";
import { ImageDrawable } from "./ImageDrawable";
interface OverviewMapModelConfig extends ModelConfig {
    min: THREE.Vector3;
    max: THREE.Vector3;
}
export declare enum OverviewMapPluginEvent {
    RotateCamera = "rotatecamera",
    TranslateCamera = "translatecamera"
}
export declare class OverviewModel extends Model {
    modelId: string;
    modelObject: THREE.Object3D;
    bbox: THREE.Box3;
    constructor(modelId: string, object: THREE.Object3D, bbox: THREE.Box3);
    getModelObject(): THREE.Object3D<THREE.Object3DEventMap>;
    getBBox(): THREE.Box3;
}
export declare class OverviewMapViewer extends BaseViewer<Record<OverviewMapPluginEvent | ViewerEvent, any>> {
    selectedObject?: THREE.Object3D | Drawable;
    private drawableList;
    cameraDrawable?: ImageDrawable;
    cameraDirectonDrawable?: ImageDrawable;
    groundPlane?: THREE.Mesh;
    constructor(viewerCfg: BaseViewerConfig);
    createCameraDrawable(): Promise<void>;
    /**
     * Gets if selection is enabled.
     */
    get enableSelection(): boolean;
    /**
     * Sets if selection is enabled.
     */
    set enableSelection(enable: boolean);
    private setupDefaultEvents;
    protected handleRotateCamera(current: THREE.Vector2, mouseStart: THREE.Vector2): void;
    protected handleTranslateCamera(e: EventInfo): void;
    loadModel(modelCfg: OverviewMapModelConfig, onProgress?: ((event: ProgressEvent<EventTarget>) => void) | undefined): Promise<void>;
    asyncMainCameraToDrawable(eye: THREE.Vector3, look: THREE.Vector3): void;
    getImageBySrc(src: string): Promise<HTMLImageElement>;
    pickPosition(e: EventInfo): THREE.Vector3 | undefined;
    is3d(): boolean;
    setObjectHighlight(object: THREE.Object3D): void;
    clearHighlight(): void;
    /**
     * Updates raycaster threshold to a proper value, so user can easily pick points and lines
     */
    private updateRaycasterThreshold;
}
export {};
