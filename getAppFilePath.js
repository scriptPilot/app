import path from 'path'
import isDevMode from './isDevMode.js'

export default (filePath = '') => {
  return path.resolve(process.cwd(), isDevMode() ? '../demo-app' : '', filePath)
}
