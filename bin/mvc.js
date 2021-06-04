#!/usr/bin/env node
const program = require('commander');
const { version } = require('../package.json');
const create = require('../lib/create');

/**
 * program – 定义命令行指令，后面可跟上一个name，用空格隔开
 * alias – 定义一个更短的命令行指令
 * description – 描述，它会在help里面展示
 * option – 定义参数
 * action – 注册一个callback函数
 * parse - 解析命令行
 */
program
	.version(version, '-v, --version')
	.command('create <projectName>')
	.description('create a new project')
	.action(projectName => {
		create(projectName)
	})

program.parse(process.argv)

if (!program.args.length) {
	program.help()
}