import { THREE, DrawableData, PathDrawable } from "@x-viewer/core";
import type { TextMarkup } from "../markups/TextMarkup";
/**
 * Markup for Viewer2d contains additional information, e.g. layoutName.
 *
 * Viewer2d doesn't maintain the relationship between model and markup data,
 * business logic should knows which model a set of markup data belong to.
 */
export type MarkupData = DrawableData;
export declare abstract class BaseMarkup extends PathDrawable {
    protected editPointSize: number;
    protected editPointFillColor: string;
    protected editPointStrokeColor: string;
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    protected ctx?: CanvasRenderingContext2D;
    leaderText?: TextMarkup;
    parent?: BaseMarkup;
    constructor(id: string);
    isSelected(): boolean;
    drawSelect(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    private drawPoints;
    isPointInPath(p: THREE.Vector3): boolean;
    setData(data: DrawableData): void;
    getData(): DrawableData;
    setParent(parent: BaseMarkup): void;
    setLeaderText(textMarkup: TextMarkup): void;
    getVertexes(): THREE.Vector3[];
    update(points: THREE.Vector3[]): this;
    translate(tx: number, ty: number): this;
}
