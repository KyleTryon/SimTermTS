import {Program} from "../structure/Program/Program"
import { ProcessOutput } from '../types/OS/Process/Process'
import { ProgramOptions } from '../types/OS/Process/Program'
import Filesystem from '../structure/FileSystem'

export default class ProgramLs extends Program {
  alias = "ls"
  constructor(options: ProgramOptions) {
    super(options)
  }
  exec(): Promise<ProcessOutput> {
    const lfs = new Filesystem()
    let stdout: string = ""
    let exitCode = 0
    try {
      const dir = lfs.getDirectory(this.parameters[1])
      dir.children.forEach(child => {
        stdout += `${child.options.name}\n`
      })

    } catch (error) {
      stdout = error
      exitCode = 1
    }
    return new Promise(resolve => {
      resolve(
        {
          exitCode: exitCode,
          output: {
            stdout: stdout,
            stderr: null
          }
        }
      )
    })
  }
}