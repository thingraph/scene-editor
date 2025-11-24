import { DxfLayers, Viewer2d, PdfLayers, Plugin, PluginConfig } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
/**
 * Dxf layer manager config.
 */
export interface LayerManagerPluginConfig extends Partial<PluginConfig> {
    /**
     * Container div id.
     */
    containerId: string;
    /**
     * If panel is visible. It is visible by default.
     */
    visible?: boolean;
}
/**
 * Layer manager plugin events.
 */
type LayerManagerPluginEvents = {
    /**
     * Panel visibility change event.
     */
    visibilitychange: boolean;
};
/**
 * Dxf layer manager.
 * Can be used by Viewer2d.
 */
export declare class LayerManagerPlugin extends Plugin<LayerManagerPluginEvents> {
    static readonly DEFAULT_ID = "LayerManagerPlugin";
    protected cfg: LayerManagerPluginConfig;
    protected basePanel?: BasePanel;
    protected container?: HTMLDivElement;
    protected content?: HTMLDivElement;
    protected layerList?: HTMLDivElement;
    protected dxfLayersArray?: (DxfLayers | PdfLayers)[];
    protected checkboxes?: HTMLInputElement[];
    constructor(viewer: Viewer2d, cfg?: LayerManagerPluginConfig);
    protected init(): void;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    private onClose;
    destroy(): void;
    addContent(): void;
    generateListItem(layer: string, visible: boolean, color?: string): string;
    checkboxHandler(checkbox: HTMLInputElement): void;
    updatePage(): void;
    updateHeaderText(): void;
    convertDecimalToHex(decimal: number): string | undefined;
}
export {};
