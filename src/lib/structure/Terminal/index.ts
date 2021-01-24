import * as ReadLine from 'readline'
import {Program, ProgramConstructor} from "../Program/Program"
import { ProcessOutput } from '../../types/OS/Process/Process'
import ProcessManager from '../OS/Process/ProcessManager'
import Process from '../OS/Process/Process'
import { ProgramOptions } from '../../types/OS/Process/Program'

export default class Terminal extends Program {
  alias = "sh"
  private _cli?: ReadLine.Interface

  constructor(options: ProgramOptions ) {
    super(options)
  }

  async init() {
    this._cli = ReadLine.createInterface({
      input: process.stdin,
      output: process.stdout,
      prompt: `machine@${this.cwd} $ `, // Not sure how we'll access the CWD or other process info from the program yet.
      terminal: false
    })
    this._cli.prompt()
    this._cli.on('line', async (input) => {
      let inputCommand = input.split(" ")[0]
      if (this.proc.isProgram(inputCommand)) {
        const programClass: ProgramConstructor = this.proc.fetchProgram(inputCommand) as ProgramConstructor
        const program = new programClass({stdin: input, cwd: this.proc.cwd, pid: this.pid, procManager: this.procManager })
        const forkedProcess = this.proc.fork(program)
        let response = await forkedProcess.exec()
        console.log(response.output.stdout)
      } else {
        console.log("Command not recognized")
      }
      this._cli?.prompt()
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