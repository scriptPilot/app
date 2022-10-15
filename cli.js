#! /usr/bin/env node

import { program } from 'commander'

import hello from './scripts/hello.js'

program
  .command('hello')
  .description('Log "Hello World" to the console.')
  .action(hello)

program.parse()
