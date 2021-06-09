const path = require('path')
const cli = require('cac')()

cli.option('--project <project>', '选择项目 [editor | site]', {
  default: 'editor'
})

const compile = cli.parse();


/**
 * 将当前命令指定的项目名称设置为环境变量
 * 在 build 时可用于输出到指定目录
 */
process.env.PROJECT_NAME = compile.project;

// 项目版本
process.env.VUE_APP_UNION_VERSION = require('../package.json').version;

if (compile.deployVersion) {
  // 部署版本，配合多版本测试
  process.env.VUE_APP_DEPLOY_VERSION = compile.deployVersion;
}

module.exports = compile
