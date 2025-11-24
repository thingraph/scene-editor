import { THREE, THREEAddons } from "@x-viewer/core";
/**
 * CoordinateAxes class.
 */
export declare class CoordinateAxes extends THREE.Object3D {
    name: string;
    private readonly AXIS_LENGTH;
    private readonly AXIS_COLOR_X;
    private readonly AXIS_COLOR_Y;
    private readonly AXIS_COLOR_Z;
    constructor(addTexts?: boolean, ignoreZAxis?: boolean);
    addTexts(ignoreZAxis?: boolean): void;
    createText(text: string, color: string, size?: number): THREEAddons.CSS2DObject;
}
