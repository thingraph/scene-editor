import { THREE } from "@x-viewer/core";
import { BaseMarkup } from "../markups/BaseMarkup";
export declare class DotMarkup extends BaseMarkup {
    radius: number;
    constructor(id: string, points: THREE.Vector3[]);
    getVertexes(): THREE.Vector3[];
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    getClassType(): string;
}
