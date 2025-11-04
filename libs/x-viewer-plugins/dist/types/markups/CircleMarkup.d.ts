import { THREE } from "@x-viewer/core";
import { BaseMarkup } from "../markups/BaseMarkup";
import { MarkupType } from "../markups/Constants";
export declare class CircleMarkup extends BaseMarkup {
    radius: number;
    type: MarkupType;
    constructor(id: string, points: THREE.Vector3[]);
    getVertexes(): THREE.Vector3[];
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    isPointInPath(p: THREE.Vector3): boolean;
    getClassType(): string;
}
