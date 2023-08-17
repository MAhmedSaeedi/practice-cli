#!/usr/bin/env node

import { Command } from "commander"

const program = new Command()

program
.argument("<string>","string to log")

.action((message:string)=>{
    console.log(`Hello ${message}`)
})
.description("Say hello")

program.parse(process.argv)