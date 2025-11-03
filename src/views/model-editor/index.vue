<template>
  <div class="model-editor-layout">
    <TopMenu :menus="menus" @select="onMenuSelect" />
    <div id="myCanvas" class="viewer-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import TopMenu from '@/components/TopMenu.vue';
import { Viewer3d, type Viewer3dConfig } from '@x-viewer/core';
import { 
    AxisGizmoPlugin, 
    BottomBarPlugin, 
    ContextMenuPlugin, 
    ExportFormats, 
    ExportPlugin, 
    GroundGridPlugin, 
    GroundShadowPlugin, 
    LocalModelUploader, 
    MeasurementPlugin, 
    PropertyPlugin, 
    ScreenshotPlugin, 
    SectionPlugin, 
    Settings3dPlugin, 
    SkyboxPlugin, 
    TreeViewPlugin, 
    ViewCubePlugin, 
    Viewer3dToolbarPlugin,
} from '@x-viewer/plugins';

const language = 'en'; // "en" or "cn"
const viewerCfg = {
  containerId: 'myCanvas',
  language,
} as Viewer3dConfig;

let viewer: Viewer3d | null = null;
let exportPlugin: ExportPlugin | null = null;
let modelUploader: LocalModelUploader | null = null;
let resizeHandler: (() => void) | null = null;

// file input ref
const fileInput = ref<HTMLInputElement | null>(null);

const menus = [
  { label: 'File', key: 'file', items: [{ label: 'New', key: 'file:new' }, { label: 'Open', key: 'file:open' }, { label: 'Export', key: 'file:export' }] },
  { label: 'Edit', key: 'edit' },
  { label: 'View', key: 'view' },
  { label: 'Tools', key: 'tools' },
  { label: 'Help', key: 'help', items: [{ label: 'About', key: 'help:about' }, { label: 'File formats', key: 'help:formats' }] },
];

// central init function to (re)create viewer and plugins
async function initViewer() {
  // ensure previous viewer cleaned up
  disposeViewer();

  // ensure DOM ready
  await nextTick();

  viewer = new Viewer3d(viewerCfg);

  const menuConfig = {};

  // attach plugins
  try {
    new AxisGizmoPlugin(viewer);
    new BottomBarPlugin(viewer);
    new ContextMenuPlugin(viewer);
    exportPlugin = new ExportPlugin(viewer);
    new GroundGridPlugin(viewer);
    new GroundShadowPlugin(viewer, { updateDelay: 0, enabled: false });
    new MeasurementPlugin(viewer, { language });
    new PropertyPlugin(viewer, { language });
    new ScreenshotPlugin(viewer);
    new SectionPlugin(viewer, { language });
    new SkyboxPlugin(viewer);
    new Settings3dPlugin(viewer, { language, visible: false });
    new TreeViewPlugin(viewer, { language, visible: false });
    new ViewCubePlugin(viewer, { containerId: 'myViewCube', language });
    new Viewer3dToolbarPlugin(viewer, { menuConfig, language });
  } catch (err) {
    // plugin attach errors shouldn't break app
    // console.warn('plugin attach error', err);
  }

  // local uploader helper (used by File -> Open)
  try {
    modelUploader = new LocalModelUploader(viewer);
  } catch {
    modelUploader = null;
  }

  // resize handler
  resizeHandler = () => {
    try { viewer?.resize?.(); } catch (e) { /* ignore */ }
  };
  window.addEventListener('resize', resizeHandler);
}

function disposeViewer() {
  // remove resize listener
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
    resizeHandler = null;
  }

  try {
    viewer?.destroy();
  } catch {}
  viewer = null;
}

function onMenuSelect(payload: { label: string; key: string }) {
  // handle menu actions per key
  switch (payload.key) {
    case 'file:new':
      // re-create viewer and plugins without full page reload
      initViewer();
      break;
    case 'file:open':
      // prefer uploader if available, otherwise fallback to file input
      modelUploader?.openFileBrowserToUpload();
      break;
    case 'file:export':
      exportPlugin?.showExportPanel(ExportFormats.Glb, "scene");
      break;
    case 'help:about':
      console.log('About');
      break;
    case 'help:formats':
      console.log('File formats');
      break;
    default:
      console.log('menu select', payload);
  }
}

onMounted(async () => {
  await initViewer();
});

onBeforeUnmount(() => {
  disposeViewer();
});
</script>

<style scoped>
.model-editor-layout {
  /* Fill viewport except footer (footer height is 40px, CloudFooter uses absolute bottom:0) */
  display: flex;
  flex-direction: column;
  height: calc(100% - 40px);
  box-sizing: border-box;
}

/* viewer should take remaining space under TopMenu and not cause vertical scroll */
.viewer-container {
  width: 100%;
  flex: 1 1 auto;
  min-height: 0; /* allow flex child to shrink correctly */
  overflow: hidden; /* prevent internal vertical scroll */
  box-sizing: border-box;
}
</style>
