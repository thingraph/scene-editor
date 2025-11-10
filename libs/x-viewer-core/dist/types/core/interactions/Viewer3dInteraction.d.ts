import { Object3D } from "three";
import { Interaction } from "./Interaction";
import { Drawable } from "../../core/canvas/Drawable";
import type { Viewer3d } from "../../core/viewers/Viewer3d";
export declare class Viewer3dInteraction extends Interaction {
    private mouseMoved;
    private mouseButtonPressed;
    private lastLeftPointerUpTime;
    private mouseDownPositionX;
    private mouseDownPositionY;
    private currentIntersection;
    private isSelected;
    selectedObject?: Object3D | Drawable;
    constructor(viewer: Viewer3d);
    private onObjectSelected;
    private onObjectDeselected;
    private isCloseToLastPosition;
    private isDoubleClick;
    private handle_pointerdown;
    private handle_pointermove;
    private handle_pointerup;
    private handleClickObject;
    private handleAnchorPoint;
    destroy(): void;
    clearSelection(): void;
}
