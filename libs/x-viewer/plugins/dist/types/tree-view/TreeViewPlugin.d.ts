import { Viewer3d, Plugin, PluginConfig, THREE } from "@x-viewer/core";
import { BasePanel } from "@x-viewer/ui";
/**
 * Tree view plugin config.
 */
export interface TreeViewPluginConfig extends Partial<PluginConfig> {
    /**
     * Container div id.
     */
    containerId?: string;
    /**
     * If panel is visible. It is visible by default.
     */
    visible?: boolean;
    language?: "cn" | "en";
}
/**
 * Tree view plugin events.
 */
type TreeViewPluginEvents = {
    /**
     * Panel visibility change event.
     */
    visibilitychange: boolean;
};
/**
 * Tree view plugin.
 */
export declare class TreeViewPlugin extends Plugin<TreeViewPluginEvents> {
    static readonly DEFAULT_ID = "TreeViewPlugin";
    protected cfg: TreeViewPluginConfig;
    protected basePanel?: BasePanel;
    protected container?: HTMLDivElement;
    protected content?: HTMLDivElement;
    protected lastHighlightedObject?: THREE.Object3D;
    constructor(viewer: Viewer3d, cfg?: TreeViewPluginConfig);
    protected updateContent(): void;
    private initLocalization;
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    protected onModelLoadOrRemove: () => void;
    protected onObjectSelected: (evt: THREE.Object3D) => void;
    protected onObjectDeselected: (evt: THREE.Object3D) => void;
    private onClose;
    destroy(): void;
    protected addContent(): void;
    private buildTreeForNodeRecursive;
    private selectTreeNodeAndHighlightSceneObject;
    private highlightTreeNodeBySceneObject;
    private highlightSceneObject;
    private focusSceneObject;
    /**
     * Recursively update all children visibility and their checkboxes.
     */
    private updateChildrenVisibility;
    /**
     * Update parent checkbox state (checked/unchecked/indeterminate) based on children.
     */
    private updateParentVisibility;
    private handleSingleClick;
    private handleDoubleClick;
    private handleClick;
    private IsModelNode;
    private showPopMenu;
    private getClosestParentTreeNode;
    /**
     * Find Object3D by uuid in all loaded models.
     */
    private findObjectByUuid;
}
export {};
