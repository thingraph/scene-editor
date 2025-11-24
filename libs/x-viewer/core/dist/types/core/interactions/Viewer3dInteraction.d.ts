import { Object3D } from "three";
import { Interaction } from "./Interaction";
import { BaseViewer } from "../viewers/BaseViewer";
import { Drawable } from "../../core/canvas/Drawable";
export declare class Viewer3dInteraction extends Interaction {
    private mouseMoved;
    private mouseButtonPressed;
    private lastLeftPointerUpTime;
    private mouseDownPositionX;
    private mouseDownPositionY;
    private currentIntersection;
    private isSelected;
    selectedObject?: Object3D | Drawable;
    constructor(viewer: BaseViewer);
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
