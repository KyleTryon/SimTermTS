import FileSystem from "../FileSystem"
import ProcessManager from './Process/ProcessManager'
import Process from './Process/Process'
import Terminal from "../Terminal"
import Program from "../Program"

import * as path from 'path'
import * as fs from 'fs'

export default class OS {
  user: string = "root"
  domain: string = "TERM"

  fileSystem: FileSystem
  processManager: ProcessManager
  terminalProcess: Process


  constructor() {
    this.fileSystem = new FileSystem()
    this.processManager = new ProcessManager()
    const initPID = this.processManager.alloc_pid()
    this.processManager.proc.set(initPID, new Process(this.processManager,initPID,"~/","",))
    this.terminalProcess = new Process(this.processManager, this.processManager.alloc_pid(), "~/", "", new Terminal(//this process obj))
  }

  boot() {
    const terminalProgram = this.terminalProcess.program as Terminal
    terminalProgram.init()
  }

}