import { THREE, BaseViewer, Plugin, PluginConfig } from "@x-viewer/core";
/**
 * Ground shadow config.
 */
export interface GroundShadowPluginConfig extends Partial<PluginConfig> {
    /**
     * Blur amount for the shadow.
     * Default is 5.
     */
    blur?: number;
    /**
     * Darkness of the shadow.
     * Default is 0.8.
     */
    darkness?: number;
    /**
     * Delay in milliseconds before updating the shadow after a model is loaded.
     * Default is 2000.
     * This is to avoid updating the shadow too frequently when many models are loaded at once.
     */
    updateDelay?: number;
    /**
     * Enable or disable the ground shadow.
     * Default is true.
     */
    enabled?: boolean;
}
/**
 * Ground shadow plugin is used to show shadow for models.
 * Can be used by Viewer3d.
 * @description
 */
export declare class GroundShadowPlugin extends Plugin {
    static readonly DEFAULT_ID = "GroundShadowPlugin";
    protected cfg: GroundShadowPluginConfig;
    enabled: boolean;
    protected shadowGroup?: THREE.Group;
    protected blurPlane?: THREE.Mesh;
    protected depthMaterial?: THREE.MeshDepthMaterial;
    protected horizontalBlurMaterial?: THREE.ShaderMaterial;
    protected verticalBlurMaterial?: THREE.ShaderMaterial;
    protected shadowCamera?: THREE.OrthographicCamera;
    protected renderTarget?: THREE.WebGLRenderTarget;
    protected renderTargetBlur?: THREE.WebGLRenderTarget;
    private shouldRender;
    private timeout?;
    constructor(viewer: BaseViewer, cfg?: GroundShadowPluginConfig);
    protected get scene(): THREE.Scene;
    protected get renderer(): THREE.WebGLRenderer;
    setEnabled(enabled: boolean): void;
    isEnabled(): boolean;
    /**
     * Updates ground shadow.
     */
    update(): void;
    protected onModelUpdate: () => void;
    protected onShadowRender: () => void;
    private initMaterial;
    private initRenderTarget;
    private updateGroundShadow;
    private blurShadow;
    protected render(): void;
    destroy(): void;
}
