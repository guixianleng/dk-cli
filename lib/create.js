const creator = new Creator()
// 获取各个模块的交互提示语
const promptModules = getPromptModules()
const promptAPI = new PromptModuleAPI(creator)
promptModules.forEach(m => m(promptAPI))

// 弹出交互提示语并获取用户的选择 
const answers = await inquirer.prompt(creator.getFinalPrompts())

function getPromptModules() {
  return [
    'babel',
    'router',
    'vuex',
    'linter',
  ].map(file => require(`./promptModules/${file}`))
}
