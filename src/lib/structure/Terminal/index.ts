import * as ReadLine from 'readline'
import Program from "../Program"
import { ExitCode, ProcessOutput } from '../../types/OS/Process/Process'
import ProcessManager from '../OS/Process/ProcessManager'
import Process from '../OS/Process/Process'

export default class Terminal extends Program {
  alias = "sh"
  cli: ReadLine.Interface

  constructor(proc: Process) {
    super(proc)
    this.cli = ReadLine.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: `machine@${this.proc.cwd} $`, // Not sure how we'll access the CWD or other process info from the program yet.
      terminal: false
    })
  }

  async init() {
    this.cli.prompt()
    this.cli.on('input', async (input) => {
      let inputCommand = input.split()[0]
      if (this.proc.isProgram(inputCommand)) {
        let forkedProcess = this.proc.fork(this.proc.fetchProgram(inputCommand) as Program)
        let response = await forkedProcess.exec()
        console.log(response.output)
      } else {
        console.log("Command not recognized")
      }
      this.cli.prompt()
    })
  }

  async exec(): Promise<ProcessOutput> {
    //placeholder
    return {
      exitCode: 0,
      output: {
        stderr: null,
        stdout: null
      }
    }
  }
}