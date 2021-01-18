import { ExitCode, ProcessOutput } from '../types/OS/Process/Process'
import Process from './OS/Process/Process'
export default abstract class Program {
  abstract alias: string
  proc: Process
  constructor(proc: Process) {
    this.proc = proc
  }
  abstract exec(process: Process): Promise<ProcessOutput>
}