
module.exports = {
  promptList: [
    {
      type: 'input',
      name: 'projectName',
      message: 'please enter the project name',
    },
    {
      type: 'list',
      name: 'type',
      message: 'please select the project template',
      choices: [
        {
          name: 'pc',
          value: {
            url: 'https://github.com/guixianleng/vite2-vue2-template.git#main',
            gitName: 'vite2-vue2-template',
            val: 'PC端模版'
          }
        },
        {
          name: 'H5',
          value: {
            url: '',
            gitName: '',
            val: '移动端模版'
          }
        },
        {
          name: 'Mini program',
          value: {
            url: '',
            gitName: '',
            val: '小程序模版'
          }
        },
        {
          name: 'Component library',
          value: {
            url: 'https://github.com/guixianleng/ui-library-templ.git#main',
            gitName: 'component library',
            val: '组件库发布模版'
          }
        },
      ],
    },
    {
      type: 'input',
      name: 'description',
      message: 'please enter the project description',
      default: 'this is a description'
    },
    {
      type: 'input',
      name: 'author',
      message: 'please enter the author name',
    }
  ]
}
