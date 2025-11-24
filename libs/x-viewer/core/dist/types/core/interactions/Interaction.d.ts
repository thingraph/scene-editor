import type { BaseViewer } from "../../core/viewers/BaseViewer";
export declare class Interaction {
    protected viewer: BaseViewer;
    private _events;
    constructor(viewer: BaseViewer);
    addEvents(events: string[]): void;
    removeEvents(events: string[]): void;
    destroy(): void;
    clearSelection(): void;
}
