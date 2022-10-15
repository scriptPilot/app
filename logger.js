import chalk from 'chalk'

const logger = {

  blue: text => {
    console.log(chalk.bold.blue(text))
  },

  red: text => {
    console.log(chalk.bold.red(text))
  },

  green: text => {
    console.log(chalk.bold.green(text))
  },

}

export default logger
