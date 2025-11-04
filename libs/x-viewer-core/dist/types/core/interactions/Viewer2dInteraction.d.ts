import { Object3D } from "three";
import { Interaction } from "./Interaction";
import { Drawable } from "../../core/canvas/Drawable";
import type { Viewer2d } from "../../core/viewers/Viewer2d";
export declare class Viewer2dInteraction extends Interaction {
    private mouseDown;
    private mouseMoved;
    private inputManager;
    selectedObject?: Object3D | Drawable;
    constructor(viewer: Viewer2d);
    private handle_pointerdown;
    private handle_pointermove;
    private handle_pointerup;
    private handleMouseClick;
    destroy(): void;
    clearSelection(): void;
}
