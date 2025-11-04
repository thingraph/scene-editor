import * as THREE from "three";
import { DrawableData } from "./Constants";
import { Drawable } from "./Drawable";
export declare class PathDrawable extends Drawable {
    position: THREE.Vector3;
    rotation: THREE.Euler;
    scale: THREE.Vector3;
    matrix: THREE.Matrix4;
    matrixNeedsUpdate: boolean;
    constructor(id: string, points?: THREE.Vector3[]);
    setPoints(points: THREE.Vector3[]): void;
    setPosition(x: number, y: number, z: number): void;
    getPosition(): THREE.Vector3;
    setRotation(x: number, y: number, z: number): void;
    getRotation(): THREE.Euler;
    setScale(scaleX: number, scaleY: number, scaleZ: number): void;
    getScale(): THREE.Vector3;
    /**
     *
     * @param p The point to check if it is inside the path.
     * @description Check if a point is inside the path defined by the points of this drawable.can override this method to implement custom logic.
     * @returns {boolean} True if the point is inside the path, false otherwise.
     */
    isPointInPath(p: THREE.Vector3): boolean;
    getPointsBarycenter(): THREE.Vector3;
    calculateMatrix(): void;
    getCenter(): THREE.Vector3;
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    /**
     * Draw the selection outline for this drawable.
     * @param ctx The canvas rendering context.
     * @param camera The camera used for rendering.
     */
    drawSelect(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    getVertexes(): THREE.Vector3[];
    getData(): DrawableData;
    setData(data: DrawableData): void;
    getClassType(): string;
}
