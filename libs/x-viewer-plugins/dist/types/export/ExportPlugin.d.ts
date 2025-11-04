import { THREE, BaseViewer, Plugin, PluginConfig, Viewer3d, THREEAddons } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
export declare enum ExportFormats {
    Glb = "glb",
    Gltf = "gltf",
    Obj = "obj",
    Stl = "stl",
    Ply = "ply"
}
/**
 * Export plugin config.
 */
export interface ExportPluginConfig extends Partial<PluginConfig> {
    language?: "cn" | "en";
}
/**
 * Export plugin is used to export scene to a 3d model.
 * @description
 */
export declare class ExportPlugin extends Plugin {
    static readonly DEFAULT_ID = "ExportPlugin";
    protected cfg: ExportPluginConfig;
    protected basePanel?: BasePanel;
    protected viewer3d: Viewer3d;
    constructor(viewer: BaseViewer, cfg?: ExportPluginConfig);
    /**
     * Exports to gltf or glb format.
     * @param filename pure filename without extension.
     * @param binary true to export as binary glb, false to export as text gltf.
     * @internal
     */
    exportGltf(filename: string, options?: THREEAddons.GLTFExporterOptions, targetObject?: THREE.Object3D | null): void;
    /**
     * Exports to OBJ format.
     * @param filename pure filename without extension.
     */
    exportObj(filename: string, targetObject?: THREE.Object3D | null): void;
    exportStl(filename: string, targetObject?: THREE.Object3D | null): void;
    exportPly(filename: string, binary?: boolean, targetObject?: THREE.Object3D | null): void;
    /**
     * Shows the export options panel.
     */
    showExportPanel(targetFormat?: ExportFormats, filename?: string, targetObject?: THREE.Object3D | null): void;
    /**
     * Saves/downloads a blob as a file.
     * @param blob The blob to save.
     * @param filename The filename (with extension) to save as.
     */
    saveBlobAsFile(blob: Blob, filename: string): void;
    saveStringAsFile(text: string, filename: string): void;
    saveArrayBufferAsFile: (buffer: ArrayBuffer, filename: string) => void;
    destroy(): void;
}
