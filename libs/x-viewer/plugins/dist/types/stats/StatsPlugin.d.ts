import { BaseViewer, Plugin } from "@x-viewer/core";
import Stats from "stats.js";
/**
 * Stats plugin is a debug tool for developers to observe the performance of a page.
 */
export declare class StatsPlugin extends Plugin {
    protected stats?: Stats;
    constructor(viewer: BaseViewer);
    private init;
    /**
     * Shows the stats panel, which indicates current FPS, MS, MB, etc.
     */
    show(): void;
    /**
     * Shows the stats panel, which indicates current FPS, MS, MB, etc.
     */
    hide(): void;
    destroy(): void;
}
