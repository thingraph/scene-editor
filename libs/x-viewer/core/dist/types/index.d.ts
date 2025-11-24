import "./css/main.scss";
import "intl-pluralrules";
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as i18next from "i18next";
export { i18next };
export * from "./core";
export * from "./version";
/**
 * Define window.THREE, so that user can use it directly without installing it.
 * @example
 * ``` typescript
 * const viewerCfg = { containerId: "myCanvas" };
 * const viewer = new Viewer2d(viewerCfg);
 * const min = new THREE.Vector3(0, 0, 0);
 * const max = new THREE.Vector3(100, 0, 100);
 * const bbox = new THREE.Box3(min, max);
 * viewer.zoomToBBox(bbox);
 * ```
 */
import * as THREE from "three";
import * as THREEAddons from "three/examples/jsm/Addons.js";
export { THREE, THREEAddons };
