/**
 * BasePanel options
 */
export interface BasePanelOptions {
    /**
     * Panel parent container in DOM.
     */
    container: HTMLElement;
    /**
     * Panel title
     */
    title: string;
    /**
     * The css class name. This will be added to panel root div.
     * Caller can use this to override initial panel position, size, etc.
     */
    cssClass?: string;
    /**
     * Callback when panel is hidden
     */
    onClose?: () => void;
    /**
     * Used by drag, when user want to limit the panel to be dragged within a certain area.
     */
    viewportContainer?: HTMLElement;
}
/**
 * Base panel, which defined common draggable header, close button, style, etc.
 */
export declare class BasePanel {
    root: HTMLDivElement;
    header: HTMLDivElement;
    content: HTMLDivElement;
    collapseBtn: HTMLSpanElement;
    closeBtn: HTMLSpanElement;
    protected mouseDownPositionX: number;
    protected mouseDownPositionY: number;
    protected onClose: () => void;
    protected viewportContainer?: HTMLElement;
    private originalPanelHeight;
    constructor(options: BasePanelOptions);
    setVisible(visible: boolean): void;
    isVisible(): boolean;
    setTitle(title: string): void;
    setContent(html: string): void;
    destroy(): void;
    private onHide;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    /**
     * When panel has a transform, e.g. "transform: translate(-50%, -50%);", we need to calculate the actual position.
     */
    private getPanelTransform;
}
