const path = require("path");
const { spawn } = require("child_process");
const { options } = require("./compile");

const viteCliBin = path.resolve(process.cwd(), "node_modules/.bin/vite");

const cmd = `${viteCliBin} build --config config/vite.${options.project}.config.ts `;

spawn(cmd, {
  cwd: process.cwd(),
  stdio: "inherit",
  shell: true,
});
