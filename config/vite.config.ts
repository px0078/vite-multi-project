import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default {
  plugins: [vue()],
  envDir: path.resolve(process.cwd(), `env/`),
};
