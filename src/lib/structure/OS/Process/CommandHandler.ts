import { ProgramClass } from "../../../types/Program"

import * as path from 'path'
import * as fs from 'fs'

export default class CommandHandler {
  commands: Map<string, ProgramClass> = new Map()

  loadPrograms() {
    // In the future, only load programs if they are in the user's path. This should be able to be ran again if the path is sourced in the future.
    const programPath = "../../../programs"
    const programFiles = fs.readdirSync(path.join(__dirname, programPath))

    programFiles.forEach(file => {
      file = path.join(__dirname, programPath, file)
      const cmdClass = require(file).default
      const command = new cmdClass() as ProgramClass
      this.commands.set(command.alias, command)
    })
  }

}