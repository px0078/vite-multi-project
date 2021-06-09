const path = require('path')
const fs = require('fs')
const { spawn } = require('child_process')
const { options } = require('./compile');

const viteCliBin = path.resolve(process.cwd(), 'node_modules/.bin/vite')


// 运行环境
process.env.VUE_APP_ENV = 'local';

// 你可以显式地通过 --config 命令行选项指定一个配置文件（相对于 cwd 路径进行解析）
// path-to-your-project/node_modules/.bin/vite serve --config config/vite.editor.config.ts
const cmd = `${viteCliBin} serve --config config/vite.${options.project}.config.ts `;


spawn(cmd, {
  cwd: process.cwd(),
  stdio: 'inherit',
  shell: true,
});
