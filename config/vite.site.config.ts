import { defineConfig } from "vite";
import config from "./vite.config";

import path from "path";

const project = "site";
const root = path.resolve(process.cwd(), `src/${project}/`);

// https://vitejs.dev/config/
export default defineConfig({
  ...config,
  root,
  base: "./",
  publicDir: `./public`,
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(process.cwd(), `src/`) }],
  },
  server: {
    host: "127.0.0.1",
    port: 9001,
  },
  build: {
    outDir: `${process.cwd()}/dist/${project}`,
  },
});
