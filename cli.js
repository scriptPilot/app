#! /usr/bin/env node

import { program } from 'commander'

import ios from './scripts/ios.js'

program
  .command('ios')
  .description('Open Xcode with a Vite development server.')
  .action(ios)

program.parse()
