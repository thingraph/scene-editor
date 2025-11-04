import { BaseViewer, DrawableList, type OSnapHelper, EventInfo, InputManager } from "@x-viewer/core";
import { AngleMeasureDrawable } from "./AngleMeasureDrawable";
import { BaseMeasurement } from "./BaseMeasurement";
export declare class AngleMeasurement extends BaseMeasurement {
    constructor(viewer: BaseViewer, input: InputManager, drawList: DrawableList, osnapHelper: OSnapHelper);
    protected createMeasureDrawable(): AngleMeasureDrawable | undefined;
    protected onMouseClick(e: EventInfo): void;
    exitDrawing(): void;
    protected complete(): void;
    cancel(): void;
    deactivate(): void;
    protected setTooltipContent(): void;
}
