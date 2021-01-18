import Program from "../structure/Program"
import { ProcessOutput } from '../types/OS/Process/Process'
import Process from '../structure/OS/Process/Process'

export default class ProgramEcho extends Program {
  alias = "echo"
  exec(process: Process): Promise<ProcessOutput> {
    
    return new Promise(() => {
      return {
        exitCode: 0,
        output: {
          stdout: process.fd.stdin,
          stderr: null
        }
      }
    })
  }
}