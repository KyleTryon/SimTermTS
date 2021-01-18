import { ProcessState, FileDescriptor, ExitCode, ProcessOutput } from '../../../types/OS/Process/Process'
import ProcessManager from './ProcessManager'
import Program from "../../Program"
export default class Process {
  private _procManager: ProcessManager
  private _pid: number
  public state: ProcessState
  private _fd: FileDescriptor = {
    stdin: "",
    stdout: null,
    stderr: null
  }
  get fd(): FileDescriptor {
    return this._fd
  }
  private _exitCode: number = 0
  public cwd: string
  public program: Program
  constructor(procManager: ProcessManager, pid: number, cwd:string,  stdin: string, program: Program) {
    this._procManager = procManager
    this._pid = pid
    this.cwd = cwd
    this._fd.stdin = stdin
    this.state = ProcessState.R
    this.program = program
  }
  async exec(): Promise<ProcessOutput> {
    const output =  await this.program.exec(this)
    this._exitCode = output.exitCode
    this._fd.stdout = output.output.stdout
    this._fd.stderr = output.output.stderr
    this.close()
    return output
  }

  close(): void {
    this._procManager.proc.delete(this._pid)
  }

  fork(program: Program): Process {
    // generate new process pass stdout to
    // - Fill process with same contents, except the program, use the appropriate program.
    const pid = this._procManager.alloc_pid()
    const process = new Process(this._procManager, pid, this.cwd, this._fd.stdin, program)
    this._procManager.proc.set(pid, process)
    return process
  }

  isProgram(inputCommand: string): boolean {
    return this._procManager.commandHander.commands.has(inputCommand)
  }
  fetchProgram(inputCommand: string): Program | undefined {
    return this._procManager.commandHander.commands.get(inputCommand)
  }
}