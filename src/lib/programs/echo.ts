import {Program} from "../structure/Program/Program"
import { ProcessOutput } from '../types/OS/Process/Process'
import { ProgramOptions } from '../types/OS/Process/Program'

export default class ProgramEcho extends Program {
  alias = "echo"
  constructor(options: ProgramOptions) {
    super(options)
  }
  exec(): Promise<ProcessOutput> {
    // this input string always begins with "echo ", followed by the string (for now until there are command options).
    const parameterArray = this.parameters
    parameterArray.shift()
    const output = parameterArray.join(" ")
    return new Promise(resolve => {
      resolve(
        {
          exitCode: 0,
          output: {
            stdout: output,
            stderr: null
          }
        }
      )
    })
  }
}