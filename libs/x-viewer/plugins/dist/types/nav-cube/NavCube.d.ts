import { THREE } from "@x-viewer/core";
export interface NavCubeConfig {
    onClick?: (direction: THREE.Vector3, rotation: THREE.Euler) => void;
}
export declare class NavCube extends THREE.Object3D {
    NAVCUBE_SIZE: number;
    private clickHandler;
    constructor(cfg?: NavCubeConfig);
    private createPlane;
    private createEdge;
    private createCorner;
}
