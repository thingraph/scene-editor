import { Viewer3d, Plugin, PluginConfig, THREE } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
/**
 * Tree view plugin config.
 */
export interface PropertyPluginConfig extends Partial<PluginConfig> {
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
 * Tree view plugin events.
 */
type PropertyPluginEvents = {
    /**
     * Panel visibility change event.
     */
    visibilitychange: boolean;
};
/**
 * Tree view plugin.
 */
export declare class PropertyPlugin extends Plugin<PropertyPluginEvents> {
    static readonly DEFAULT_ID = "PropertyPlugin";
    protected cfg: PropertyPluginConfig;
    protected basePanel?: BasePanel;
    protected container?: HTMLDivElement;
    protected content?: HTMLDivElement;
    protected details?: HTMLDivElement;
    protected selectedObject: THREE.Object3D | undefined;
    protected lastActiveTabIdx: number;
    protected nodePanel?: HTMLDivElement;
    protected nodeModeButtons?: {
        local: HTMLButtonElement;
        global: HTMLButtonElement;
    };
    protected nodeInputs?: {
        translation: HTMLInputElement[];
        rotation: HTMLInputElement[];
        scale: HTMLInputElement[];
    };
    protected geometrySection?: HTMLDivElement;
    protected boundingBoxSection?: HTMLDivElement;
    constructor(viewer: Viewer3d, cfg?: PropertyPluginConfig);
    protected updateContent(): void;
    private initLocalization;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    protected onObjectSelected: () => void;
    protected onObjectDeselected: () => void;
    private onClose;
    destroy(): void;
    protected addContent(): void;
    private isMaterialTabEnabled;
    private isNodeTabEnabled;
    private isPropertyTabEnabled;
    renderTab(idx: number): void;
    private clearDetails;
    private renderMaterial;
    private renderNode;
    protected updateNodeInputs(target: THREE.Object3D): void;
    protected applyNodeInputs(target: THREE.Object3D): void;
    private updateGeometryInfo;
    private updateBoundingBoxInfo;
    private getVertexCount;
    private getTriangleCount;
    private getGlobalSize;
    private renderProperty;
}
export {};
