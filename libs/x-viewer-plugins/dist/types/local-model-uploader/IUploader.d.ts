import { BaseViewer } from "@x-viewer/core";
/**
 * @internal
 */
export declare class IUploader {
    protected viewer: BaseViewer;
    protected input: HTMLInputElement;
    protected dropZone: HTMLDivElement;
    constructor(viewer: BaseViewer, elementId?: string);
    protected formats(): string[];
    protected uploadFiles(files: FileList): void;
    openFileBrowserToUpload(): void;
    destroy(): void;
    protected handleDragEnter: (e: DragEvent) => void;
    protected handleDragLeave: (e: DragEvent) => void;
    protected handleDragOver: (e: DragEvent) => void;
    protected handleDrop: (e: DragEvent) => void;
}
