import { Viewer2d, ModelConfig } from "@x-viewer/core";
import { IUploader } from "./IUploader";
/**
 * @internal
 */
export declare class LocalDxfUploader extends IUploader {
    private pdfWorker;
    onSuccess?: (event: any) => void;
    readonly defaultModelConfig: ModelConfig;
    constructor(viewer: Viewer2d, elementId?: string, formats?: string[]);
    setPdfWorker(pdfWorker: string): void;
    protected formats(): string[];
    protected uploadFiles(files: FileList): void;
    /**
     * Upload single dxf file.
     */
    private uploadSingleDxf;
    /**
     * Upload single dxf file.
     */
    private uploadSinglePdf;
}
