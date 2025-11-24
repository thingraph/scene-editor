import * as THREE from "three";
import { BaseViewer } from "./BaseViewer";
import { ViewerName } from "./Constants";
import { EffectManager } from "../effect";
import { Model3d } from "../model";
import { Viewer3dConfig, ModelConfig, Viewpoint } from "../../core/Configs";
export declare class Viewer3d extends BaseViewer {
    name: ViewerName;
    loadedModels: Model3d[];
    distanceCullingFactor: number;
    protected effect: EffectManager;
    private shouldDispatchModelLoadEvent;
    constructor(viewerCfg: Viewer3dConfig, homeView?: Viewpoint);
    protected setDefaultBackground(): void;
    is3d(): boolean;
    loadLocalModel(url: string, modelCfg: ModelConfig, manager?: THREE.LoadingManager, onProgress?: (event: ProgressEvent) => void): Promise<void>;
    loadModel(modelCfg: ModelConfig, onProgress?: ((event: ProgressEvent<EventTarget>) => void) | undefined): Promise<void>;
    private loadModelInternal;
    addModel(model: Model3d): void;
    /**
     * Sets distance culling factor in order to improve performance.
     * 0 means distance culling is disabled.
     * 100 means a 1x1 squre mesh is visible within 100.
     * @internal
     */
    setDistanceCullingFactor(val: number): void;
    /**
     * Gets distance culling factor.
     * @internal
     */
    getDistanceCullingFactor(): number;
    /**
     * Sets an object's opacity.
     */
    setObjectOpacity(object: THREE.Object3D, opacity: number): void;
    /**
     * Sets an object's opacity.
     */
    setOtherObjectsOpacity(object: THREE.Object3D, opacity: number): void;
    /**
     * Clears an object's opacity.
     */
    clearObjectOpacity(object: THREE.Object3D): void;
    /**
     * Sets a model's opacity.
     */
    setModelOpacity(modelId: string): void;
    /**
     * Clears a model's opacity.
     */
    clearModelOpacity(modelId: string): void;
    /**
     * Sets all models' opacity.
     */
    setModelsOpacity(opacity: number): void;
    /**
     * Clears all models' opacity.
     */
    clearModelsOpacity(): void;
    /**
     * Checks if there is any transparent object in any model.
     * Note that this only consider the objects that we set as transparent,
     * it does not count objects that are transparent by default (like glass).
     */
    hasTransparentObject(): boolean;
    /**
     * Sets an object's visibility.
     */
    setObjectVisible(object: THREE.Object3D, visible: boolean): void;
    /**
     * Hides all other objects except the given one.
     */
    hideOtherObjects(object: THREE.Object3D): void;
    /**
     * Sets a model's visibility.
     */
    setModelVisible(modelId: string, visible: boolean): void;
    /**
     * Sets all models' visibility.
     */
    setModelsVisible(visible: boolean): void;
    /**
     * Enables a model's outline.
     */
    enableModelOutline(modelId: string, enable: boolean): void;
    /**
     * Enables all models' outline.
     */
    enableModelsOutline(enable: boolean): void;
    /**
     * Highlights an object.
     * TODO: support merged object and InstancedMesh
     */
    setObjectHighlight(object: THREE.Object3D): void;
    /**
     * Gets highlighted object.
     */
    getHighlightedObject(): THREE.Object3D | undefined;
    clearHighlight(): void;
    setDoubleSidedMaterials(): void;
    revertDoubleSidedMaterials(): void;
    clearSelection(): void;
    /**
     * Gets if selection is enabled.
     */
    get enableSelection(): boolean;
    /**
     * Sets if selection is enabled.
     */
    set enableSelection(enable: boolean);
    /**
     * Checks if there is any visible object.
     */
    hasVisibleObject(): boolean;
    /**
     * Checks if there is any invisible object.
     */
    hasInvisibleObject(): boolean;
    enableSsao(enable: boolean): void;
    getSsaoEnabled(): boolean;
    setEnvironmentData(data?: Uint16Array): Promise<void>;
    setEnvironment(hdrUrl: string): Promise<void>;
    showVertexNormals(show: boolean, size?: number): void;
    getLights(): {
        sun: THREE.DirectionalLight;
        ambient: THREE.Object3D<THREE.Object3DEventMap> | undefined;
        hemisphere: THREE.Object3D<THREE.Object3DEventMap> | undefined;
    };
    debugLights(enable: boolean): void;
    setModelClipPlanes(modelId: number, planes: THREE.Plane[]): void;
    setGlobalClipPlanes(planes: THREE.Plane[]): void;
    /**
     * Generates "uv1" for specified mesh or all meshes in this model. "uv1" is useful for lightmap.
     */
    generateSmartUv1(object?: THREE.Object3D): void;
}
