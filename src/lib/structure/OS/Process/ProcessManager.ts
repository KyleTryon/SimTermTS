import {ErrorCodeMap, ErrorCode} from '../../../types/OS/Process/ErrorNo'
import CommandHandler from "./CommandHandler"
import {Program} from "../../Program/Program"
import Process from "./Process"
import { CommandOptionType } from '../../../types/Command'


export default class ProcessManager {
proc: Map<Number, Process> = new Map()
lastExitCode: number = 0
public commandHander: CommandHandler

constructor() {
  this.commandHander = new CommandHandler()
  this.commandHander.loadPrograms()
}

alloc_pid(): number {
  return this.proc.size
}


}