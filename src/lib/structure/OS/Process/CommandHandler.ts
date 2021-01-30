import {Program, ProgramConstructor} from "../../Program/Program"

import * as path from 'path'
import * as fs from 'fs'

export default class CommandHandler {
  commands: Map<string, ProgramConstructor> = new Map()

  loadPrograms() {
    // In the future, only load programs if they are in the user's path. This should be able to be ran again if the path is sourced in the future.
    const programPath = "../../../programs"
    const programFiles = fs.readdirSync(path.join(__dirname, programPath))

    programFiles.forEach(file => {
      const alias = path.basename(file, ".ts")
      file = path.join(__dirname, programPath, file)
      const cmdClass = require(file).default
      const command = cmdClass as ProgramConstructor
      this.commands.set(alias, command)
    })
  }

}