import * as THREE from "three";
import { BaseFont } from "./BaseFont";
import { FontDataTableRecord } from "../indexeddb";
export declare class MeshFont extends BaseFont {
    reversed: boolean;
    constructor(fileName: string, fileData: object | FontDataTableRecord | ArrayBuffer);
    generateShapes(text: string, size: number): THREE.Shape[];
    getCharShape(char: string, size: number): THREE.Shape | undefined;
    /**
     * For an unsupported char, use "？" as a replacement.
     */
    getNotFoundTextShape(size: number): THREE.Shape | undefined;
    private parseTTF;
}
