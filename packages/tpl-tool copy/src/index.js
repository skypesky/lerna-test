/* eslint-disable @typescript-eslint/no-var-requires */
const sao = require('sao')
const path = require('path')
const execSh = require('exec-sh')
const inquirer = require('inquirer')
const { readdirSync } = require('fs')
const tpls = readdirSync(path.resolve(__dirname, '../tpls'))

const run = async (type, outDir) => {
  const app = sao({
    generator: path.resolve(__dirname, '../tpls/' + type),
    outDir: path.resolve(__dirname, '../../' + outDir)
  })
  await app.run()
}
inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: '请输入创建的模块名称',
      default: ''
    },
    {
      type: 'list',
      name: 'type',
      message: '请选择你要创建的模板类型?',
      choices: () => {
        return tpls
      }
    }
  ])
  .then(async answers => {
    await run(answers.type, answers.name)
    execSh(`yarn bootstrap`, { cwd: process.env.PWD }, err => {
      if (err) {
        console.log('Exit code: ', err.code)
      }
    })
  })
