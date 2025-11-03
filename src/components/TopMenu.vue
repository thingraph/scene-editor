<template>
  <nav ref="root" class="top-menu" role="navigation" aria-label="Top menu">
    <ul class="menu-list">
      <li v-for="menu in menus" :key="menu.key" class="menu-item">
        <button class="menu-button" @click.stop="toggle(menu.key)">
          {{ menu.label }}
        </button>

        <ul v-if="menu.items?.length" class="submenu" :class="{ open: opened === menu.key }">
          <li v-for="it in menu.items" :key="it.key" class="submenu-item">
            <button class="submenu-button" @click.stop="select(it)">{{ it.label }}</button>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue';

type SubItem = { label: string; key: string };
type Menu = { label: string; key: string; items?: SubItem[] };

const props = defineProps<{
  menus?: Menu[],
  onSelect?: (payload: { label: string; key: string }) => void
}>();

const emits = defineEmits<{
  (e: 'select', payload: { label: string; key: string }): void
}>();

const opened = ref<string | null>(null);
const root = ref<HTMLElement | null>(null);

const defaultMenus: Menu[] = [
  { label: 'File', key: 'file', items: [{ label: 'New', key: 'file:new' }, { label: 'Open', key: 'file:open' }, { label: 'Export', key: 'file:export' }] },
  { label: 'Edit', key: 'edit' },
  { label: 'View', key: 'view' },
  { label: 'Tools', key: 'tools' },
  { label: 'Help', key: 'help', items: [{ label: 'About', key: 'help:about' }, { label: 'File formats', key: 'help:formats' }] },
];

const menus = props.menus && props.menus.length ? props.menus : defaultMenus;

function select(item: SubItem) {
  opened.value = null;
  // try { props.onSelect?.({ label: item.label, key: item.key }); } catch { /* ignore */ }
  emits('select', { label: item.label, key: item.key });
}

function toggle(key: string) {
  opened.value = opened.value === key ? null : key;
}

function handleDocumentClick(e: Event) {
  const target = e.target as Node | null;
  if (!root.value) return;
  if (!target || !root.value.contains(target)) {
    opened.value = null;
  }
}

onMounted(() => {
  window.addEventListener('click', handleDocumentClick);
});

onBeforeUnmount(() => {
  window.removeEventListener('click', handleDocumentClick);
});
</script>

<style scoped>
.top-menu {
  width: 100%;
  background: #ffffff;
  color: #222;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  align-items: center;
  height: 30px;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 12px;
}

.menu-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 8px;
  align-items: center;
  height: 100%;
}
.menu-item {
  position: relative;
  height: 100%;
}
.menu-button {
  background: transparent;
  border: none;
  color: inherit;
  padding: 0 12px;
  height: 100%;
  cursor: pointer;
  font-size: 14px;
}
.menu-button:hover { background: rgba(0,0,0,0.04); }

.submenu {
  position: absolute;
  top: calc(100% - 2px);
  left: 0;
  min-width: 160px;
  background: #fff;
  color: #333;
  border: 1px solid rgba(0,0,0,0.08);
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  list-style: none;
  margin: 0;
  padding: 6px 0;
  display: none;
  z-index: 200;
  border-radius: 4px;
  pointer-events: auto;
  transition: opacity 0.12s ease;
  opacity: 0;
}
.submenu.open { display: block; opacity: 1; }

.submenu-item { padding: 0; }
.submenu-button {
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  font-size: 13px;
  color: #333;
}
.submenu-button:hover { background: #f5f5f5; }
</style>