import importFromApp from '../importFromApp.js'
import getAppFilePath from '../getAppFilePath.js'
import logger from '../logger.js'
import fs from 'fs-extra'
import { exec } from 'child_process'

const runScript = async () => {

  // Import Vite from the app folder
  const { createServer } = await importFromApp('vite')

  // Start the server and get the network url
  const server = await createServer({
    root: getAppFilePath(),
    server: {
      host: true
    }
  })
  await server.listen()
  const networkUrl = server.resolvedUrls.network[0]
  logger.green(`Server started at ${networkUrl}`)

  // Read the original configuration
  const originalConfiguration = await fs.readJson(getAppFilePath('capacitor.config.json'))

  // Create the new configuration
  const additionalConfiguation = {
    server: {
      url: networkUrl,
      cleartext: true
    }
  }
  const newConfiguration = Object.assign({}, originalConfiguration, additionalConfiguation)

  // Update the Capacitor configuration file with the new configuration
  await fs.writeJson(getAppFilePath('capacitor.config.json'), newConfiguration, { spaces: 2 })

  // Sync the Capacitor project to the Xcode project
  const syncCapacitor = () => {
    return new Promise(resolve => {
      const process = exec('npx capacitor sync ios', (err, stdOut, stdErr) => {
        if (!err) console.log(stdOut)
        resolve()
      })
    })
  }
  await syncCapacitor()

  // Update the Capacitor configuration file with the original configuration
  await fs.writeJson(getAppFilePath('capacitor.config.json'), originalConfiguration, { spaces: 2 })

  // Open the Xcode project
  exec('cd "' + getAppFilePath() + '" && npx capacitor open ios')

  // Inform the user about the next manual steps
  logger.blue('Please start the deployment in Xcode manually.')
  logger.blue('Type [CTR]+[C] to stop the server.')

}

export default () => {
  runScript()
}
