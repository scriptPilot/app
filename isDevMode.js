export default () => {
  const cwd = process.cwd()
  const scriptFolder = import.meta.url.replace(/^file:\/\/(.+)\/isDevMode\.js$/, '$1')
  const isDevMode = cwd === scriptFolder
  return isDevMode
}
