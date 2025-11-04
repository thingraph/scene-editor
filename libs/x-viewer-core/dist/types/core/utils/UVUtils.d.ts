import * as THREE from "three";
export declare class UVUtils {
    /**
     * Performs angle-based island detection + PCA projection + rectangle pack
     * (mimics Blender's Smart UV Project).
     * @param geometry      Source THREE.BufferGeometry (must be indexed).
     * @param attribute     Target attribute to apply the generated uvs. E.g., "uv", "uv1".
     * @param angleLimitDeg Max normal-angle difference to stay in one island.
     * @param islandMargin  Pixel gap between islands (0-1 UV space).
     */
    static generateSmartUv(geometry: THREE.BufferGeometry, attribute?: string, angleLimitDeg?: number, islandMargin?: number): void;
    /**
     * Performs angle-based island detection + PCA projection + rectangle pack
     * (mimics Blender's Smart UV Project).
     * @param geometry      Source THREE.BufferGeometry (indexed or non-indexed).
     * @param angleLimitDeg Max normal-angle difference to stay in one island.
     * @param islandMargin  Pixel gap between islands (0-1 UV space).
     * @returns             Float32Array(uv) same length as position count.
     */
    static smartUvProject(geometry: THREE.BufferGeometry, angleLimitDeg?: number, islandMargin?: number): Float32Array;
}
