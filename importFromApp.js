/*

  Helper to import a module from the (demo) app project folder

*/

import path from 'path'
import isDevMode from './isDevMode.js'
import logger from './logger.js'

export default async moduleName => {
  return new Promise(resolve => {

    // Evaluate the Node modules folder
    const moduleFolder = path.resolve(process.cwd(), isDevMode() ? '../demo-app' : '', 'node_modules')

    // Map module names to files if required
    let moduleFile = moduleName
    if (moduleName === 'vite') moduleFile = 'vite/dist/node/index.js'

    // Import module
    const modulePath = path.resolve(moduleFolder, moduleFile)
    import(modulePath)
      .then(moduleExport => {

        // Resolve with module export
        resolve(moduleExport)

      })
      .catch(err => {
        logger.red(`Failed to import the module "${moduleName}" from the app folder.`)
        logger.blue('Path: ' + modulePath)
      })

  })
}
