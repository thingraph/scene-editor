import * as THREE from "three";
import { DrawableData } from "./Constants";
import { PathDrawable } from "./PathDrawable";
export interface MarkerDrawableConfig {
    width?: number;
    height?: number;
    imageUrl?: string;
}
export interface MarkerDrawableData extends DrawableData {
    rotation2D: number;
    width: number;
    height: number;
    imageUrl: string;
}
export declare class MarkerDrawable extends PathDrawable {
    rotation2D: number;
    image: HTMLImageElement;
    width: number;
    height: number;
    needsFrustumCulled: boolean;
    constructor(id: string, cfg?: MarkerDrawableConfig);
    setImage(imageUrl: string): void;
    setRotation(rotation: number): void;
    getVertexes(): THREE.Vector3[];
    drawBounds(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    draw(ctx: CanvasRenderingContext2D, camera: THREE.Camera): void;
    getData(): MarkerDrawableData;
    setData(data: MarkerDrawableData): void;
    getClassType(): string;
}
