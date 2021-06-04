const inquirer = require('inquirer');
const download = require('./download');
const checkDire = require('../utils/checkDire.js');
const { promptList } = require('../config');
const path = require('path');
const chalk = require('chalk')

module.exports = async (projectName) => {
  await checkDire(path.join(process.cwd(), projectName), projectName);
  inquirer.prompt(promptList).then(answers => {
    const { url, gitName, val } = answers.type;
    console.log('项目初始化拷贝中...');
    if (!url) {
      console.log(chalk.red(`${val} 该模版暂不支持...`));
      process.exit(1);
    }
    download(url, projectName)
      .then(name => {
        console.log(chalk.green('project init successfully!'))
        console.log(`
          ${chalk.yellow(`cd ${name}`)}
          ${chalk.yellow('npm install')}
          ${chalk.yellow('npm start')}
        `);
      }).catch(err => {
        console.log(chalk.red(`clone fail, ${err}`));
      })
  })
}
