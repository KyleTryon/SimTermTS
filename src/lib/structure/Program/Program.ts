import { ProcessOutput } from '../../types/OS/Process/Process'
import Process from '../OS/Process/Process'
import ProcessManager from '../OS/Process/ProcessManager'
import { ProgramOptions } from '../../types/OS/Process/Program'
export type ProgramConstructor = new (options: ProgramOptions) => Program
export abstract class Program {
  abstract alias: string
  stdin: string
  cwd: string
  pid: number
  procManager: ProcessManager
  constructor(options: ProgramOptions) {
    this.stdin = options.stdin
    this.cwd = options.cwd
    this.pid = options.pid
    this.procManager = options.procManager
  }
  get proc(): Process {
    return this.procManager.proc.get(this.pid) as Process
  }
  abstract exec(): Promise<ProcessOutput>
  get parameters() {
    const regexp = /[\w/]+|"(?:\\"|[^"])+"/g
    const matches = this.stdin.match(regexp)
    if (matches) {
       return Array.from(matches)
    } else {
      return []
    }
  }
}
