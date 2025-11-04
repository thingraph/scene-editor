import { type BaseViewer, DrawableList, OSnapHelper, EventInfo, InputManager } from "@x-viewer/core";
import { BaseMeasurement } from "./BaseMeasurement";
import { CoordinateMeasureDrawable } from "./CoordinateMeasureDrawable";
export declare class CoordinateMeasurement extends BaseMeasurement {
    constructor(viewer: BaseViewer, input: InputManager, drawList: DrawableList, osnapHelper: OSnapHelper);
    protected createMeasureDrawable(): CoordinateMeasureDrawable | undefined;
    protected onMouseClick(e: EventInfo): void;
    exitDrawing(): void;
    protected complete(): void;
    cancel(): void;
    protected setTooltipContent(): void;
}
