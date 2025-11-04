import { type BaseViewer } from "@x-viewer/core";
import { PopPanel } from "@x-viewer/ui";
import { AxisPlaneSection } from "./AxisPlaneSection";
export declare class AxisSectionPopPanel extends PopPanel {
    protected axis: string;
    protected activeItem?: string;
    protected groupSelectNode?: HTMLElement;
    protected activeSelectNode?: HTMLElement;
    protected isVisible: boolean;
    protected section: AxisPlaneSection;
    constructor(viewer: BaseViewer);
    keydown: (e: KeyboardEvent) => void;
    destroy(): void;
    createGroupSelectLayout(): void;
    addGroupSelectItems(): void;
    createActiveSelectLayout(): void;
    addActiveItems(): void;
}
