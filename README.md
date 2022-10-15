# App CLI

CLI to support the hybrid app development.

## Installation

Run `npm install @scriptpilot/app-cli --save-dev`

## Usage

Run `npx app` to see all commands

Run `npx app <command>` to run a command

## Package Development

### Testing

Testing requires the [Demo App](https://github.com/scriptPilot/demo-app) cloned on the same level as this repository.

Run commands with `node app <command>`

### Publishing

To publish a new version to NPM:

1. Update the `README.md` file
2. Bump the version in the `package.json` file
3. Run `npm publish` (first call with ` --access public`)
4. Commit and push changes to GitHub 
