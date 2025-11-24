import { Drawable, THREE } from "@x-viewer/core";
export interface ImageConfig {
    image: HTMLImageElement;
    hoverImage: HTMLImageElement;
    offset: THREE.Vector2;
    rotationPoint: THREE.Vector2;
    width?: number;
    height?: number;
}
export declare class ImageDrawable extends Drawable {
    imageConfig: ImageConfig;
    isHover: boolean;
    rotation: number;
    position: THREE.Vector3;
    protected x: number;
    protected y: number;
    protected width: number;
    protected height: number;
    constructor(id: string, imageConfig: ImageConfig);
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    drawSelect(ctx: CanvasRenderingContext2D): void;
    drawImage(ctx: CanvasRenderingContext2D, camera: THREE.Camera, imageConfig: ImageConfig): void;
    setRotation(rotation: number): void;
    setPosition(position: THREE.Vector3): void;
    isPointInPath(p: THREE.Vector3, raycaster: THREE.Raycaster): boolean;
    getVertexes(): THREE.Vector3[];
    getClassType(): string;
}
