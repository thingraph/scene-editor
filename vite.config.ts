import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from "unplugin-auto-import/vite";
import qiankun from "vite-plugin-qiankun";
import dayjs from "dayjs";
import Unocss from "unocss/vite";
import pkg from "./package.json";

const { dependencies, devDependencies, name, version, description } = pkg
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version, description },
  lastBuildTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
};

const publicPathMap: { [key: string]: string } = {
  production: "prod",
  gray: "gray",
  test: "test",
  tice: "tice",
};
const getPublicPath = (mode: string) => {
  const OssUrl =
    mode === "production"
      ? "https://xxxxxxx.com/"
      : "https://xxxxxxx.com/";
  const base = `${OssUrl}/${name}/${publicPathMap[mode]}/`;
  return base;
  
  // 测试环境: vue3-antd4-admin，生产环境:/
  return mode === "test" ? '/vue3-antd4-admin' : '/'
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd(), '')

  const root = process.cwd();
  const config = {
    root,
    base: mode === "development" ? "/" : getPublicPath(mode),
    envDir: fileURLToPath(new URL('./env', import.meta.url)),
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
      __APP_ENV__: JSON.stringify(env.APP_ENV),
    },
    plugins: [
      vue(),
      vueJsx(),
      Components({
        dirs: ['src/components'],
        extensions: ["vue"],
        include: [/\.vue$/, /\.vue\?vue/],
        resolvers: [AntDesignVueResolver({
          importStyle: false, // css in js
        })],
        dts: "src/types/components.d.ts",
      }),
      AutoImport({
        imports: ["vue", "vue-router"],
        resolvers: [AntDesignVueResolver()],
        dts: "src/types/auto-import.d.ts",
        eslintrc: {
          enabled: true
        },
      }),
      // useDevMode 开启时与热更新插件冲突,使用变量切换
      // 如果是在主应用中加载子应用vite,必须打开这个,否则 vite 加载不成功, 单独运行没影响
      qiankun(name, { 
        useDevMode: true
      }),
      Unocss(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: "0.0.0.0",
      port: 3000,
      open: true,
      cors: true,
      proxy: {
        "/api": {
          target: "http://xxxxx:32584",
          changeOrigin: true,
          // rewrite: (path: string) => path.replace(/^\/api/, ""),
        }
      }
    },
  }
  return config
})
