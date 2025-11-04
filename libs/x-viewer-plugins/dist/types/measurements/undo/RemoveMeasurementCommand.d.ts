import { Command } from "@x-viewer/core";
import { MeasurementData } from "../BaseMeasurement";
import { type MeasurementPlugin } from "../MeasurementPlugin";
export declare class RemoveMeasurementCommand extends Command {
    private manager;
    private data;
    constructor(manager: MeasurementPlugin, data: MeasurementData);
    undo(): boolean;
    redo(): boolean;
}
