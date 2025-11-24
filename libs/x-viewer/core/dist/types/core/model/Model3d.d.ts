import * as THREE from "three";
import { ModelData3d } from "./Constants";
import { Model } from "./Model";
/**
 * Loaded 3d model info for Viewer3d.
 */
export declare class Model3d extends Model {
    modelId: string;
    bbox?: THREE.Box3;
    /**
     * Root object that contains normal object, object for highlight, object for transparent, etc.
     */
    rootObject: THREE.Group;
    /**
     * Normal model object.
     */
    modelObject: THREE.Object3D;
    /**
     * Object for highlight usage.
     */
    highlighUsage: THREE.Group;
    /**
     * Object for transparent usage.
     */
    transparentUsage: THREE.Group;
    /**
     * Each edge object is created under its Mesh object.
     * These are references of edge objects.
     */
    edges?: THREE.Object3D[];
    /**
     * Object that is being highlighted.
     */
    highlightedObject?: THREE.Object3D;
    constructor(modelData: ModelData3d);
    /**
     * Gets the THREE.Object3D of this model.
     */
    getModelObject(): THREE.Object3D;
    /**
     * Gets the bounding box of this model.
     */
    getBBox(): THREE.Box3;
    /**
     * Enables/disables edges.
     */
    enableOutline(enable: boolean, onProgress?: (event: ProgressEvent) => void): Promise<void>;
    /**
     * Sets object's color.
     */
    setObjectColor(object: THREE.Object3D, color: number): void;
    /**
     * Sets object's opacity.
     * TODO: The handling of instances and batches this time is not perfect. For example, the situation of multiple instances or batches was not considered.
     * Optimization will be carried out in the future.
     */
    setObjectOpacity(targetObject: THREE.Object3D, opacity?: number, batchId?: number, instanceId?: number): void;
    /**
     * Clears object's opacity.
     */
    clearObjectOpacity(object: THREE.Object3D, batchId?: number, instanceId?: number): void;
    /**
     * Is object transparent.
     */
    isObjectTransparent(object: THREE.Object3D): boolean;
    /**
     * Checks if there is any transparent object in model.
     * Note that this only consider the objects that we set as transparent,
     * it does not count objects that are transparent by default (like glass).
     */
    hasTransparentObject(): boolean;
    /**
     * Sets model's opacity.
     */
    setOpacity(opacity?: number): void;
    /**
     * Clears model's opacity.
     */
    clearOpacity(): void;
    /**
     * Highlights an object.
     */
    highlightObjectById(objectId: number, batchId?: number, instanceId?: number): void;
    /**
     * Highlights an object.
     */
    highlightObject(object: THREE.Object3D, batchId?: number, instanceId?: number): void;
    /**
     * Gets highlighted object.
     */
    getHighlightedObject(): THREE.Object3D | undefined;
    /**
     * If there is highlighted object.
     */
    hasHighlightedObject(): boolean;
    /**
     * Clears highlight for object(s) if any.
     */
    clearHighlight(): void;
    setDoubleSidedMaterials(): void;
    revertDoubleSidedMaterials(): void;
    /**
     * Sets an object's visibility.
     */
    setObjectVisible(object: THREE.Object3D, visible: boolean): void;
    /**
     * Sets model's visibility.
     */
    setVisible(visible: boolean): void;
    /**
     * Checks if there is any visible object.
     */
    hasVisibleObject(): boolean;
    /**
     * Checks if there is any invisible object.
     */
    hasInvisibleObject(): boolean;
    private createBatchMeshById;
    private createInstanceMeshById;
    setClipPlanes(clippingPlanes: THREE.Plane[]): void;
    /**
     * @internal
     */
    getObjectTree(): void;
    /**
     * If current Model3d contains target object.
     */
    hasObject(object: THREE.Object3D): boolean;
    /**
     * If current Model3d contains target object.
     */
    hasObjectWithId(id: number): THREE.Object3D<THREE.Object3DEventMap> | undefined;
    /**
     * Generates "uv1" for all meshes in this model. "uv1" is useful for lightmap.
     */
    generateSmartUv1(): void;
}
