import {ProcessData, ProcessRequest, ProcessState} from '../../../types/OS/Process/Process'
import {ErrorCodeMap, ErrorCode} from '../../../types/OS/Process/ErrorNo'
import CommandHandler from "./CommandHandler"
import IOStream from "./IOStream"
import Program from  "../../Program"

export default class ProcessManager {

  processList: Map<number, ProcessData> = new Map
  private _commandHandler = new CommandHandler()

  constructor() {
    this._commandHandler.loadPrograms()
    this.processList.set(1, {
      time: Date.now(),
      state: ProcessState.R,
      cmd: "init",
      uid: 0,
      cmdline: "init"
    })
  }

  alloc_pid(): number{
    return this.processList.size
  }

  changeState(pid: number, state: ProcessState): void {
    if (this.processList.has(pid)) {
      let proc = this.processList.get(pid) as ProcessData
      proc.state = state
      this.processList.set(pid, proc)
    } else {
      console.log("ERROR: Process does not exist.")
    }
  }

  exitCode(code: number): ErrorCode {
    if (ErrorCodeMap.has(code)) {
      return ErrorCodeMap.get(code) as ErrorCode
    } else {
      console.log(`Error code ${code} not recognized.`)
      return ErrorCodeMap.get(1) as ErrorCode
    }
  }

  async schedule(process: ProcessRequest): Promise<IOStream> {
    // let procID = this.alloc_pid()
    // this.processList.set(procID,{
    //   cmd: process.cmd,
    //   time: Date.now(),
    //   uid: 1000,
    //   state: ProcessState.W,
    //   cmdline: process.cmdline
    // })
    if (! this._commandHandler.commands.has(process.cmd)) {
      return new IOStream(ErrorCodeMap.get(1) as ErrorCode, "" , "Command does not exist")
    } else {
      const command = this._commandHandler.commands.get(process.cmd) as Program
      return await command.execute(new IOStream(ErrorCodeMap.get(0) as ErrorCode, process.cmdline, ""))
    }
    
  }
}