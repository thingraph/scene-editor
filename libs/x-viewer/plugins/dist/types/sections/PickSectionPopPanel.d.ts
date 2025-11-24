import { type BaseViewer } from "@x-viewer/core";
import { PopPanel } from "@x-viewer/ui";
import { PickPlaneSection } from "./PickPlaneSection";
export declare class PickSectionPopPanel extends PopPanel {
    protected activeSelectNode?: Element;
    protected isVisible: boolean;
    protected enabled: boolean;
    protected visibleNode?: HTMLElement;
    protected resetNode?: HTMLElement;
    protected section: PickPlaneSection;
    constructor(viewer: BaseViewer);
    keydown: (e: KeyboardEvent) => void;
    destroy(): void;
    createActiveSelectLayout(): void;
    addActiveItems(): void;
    enable(): void;
    disable(): void;
}
