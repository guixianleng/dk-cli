const download = require('download-git-repo');
const ora = require('ora');

module.exports = (url, name) => {
  return new Promise((resolve, reject) => {
    const spinner = ora(`Downloading please wait...`)
    spinner.start()
    download(`direct:${url}`, `./${name}`, { clone: true }, (err) => {
      if (err) {
        spinner.fail()
        reject(err)
      } else {
        spinner.succeed()
        resolve(name)
      }
    })
  })
}
