import FileSystem from "../FileSystem"
import ProcessManager from './Process/ProcessManager'
import Process from './Process/Process'
import Terminal from "../Terminal"
import {Program} from "../Program/Program"

import * as path from 'path'
import * as fs from 'fs'

export default class OS {
  user: string = "root"
  domain: string = "TERM"

  fileSystem: FileSystem
  processManager: ProcessManager
  terminalProcess: Process


  constructor() {
    console.log("SYSTEM: Initializing")
    this.fileSystem = new FileSystem()
    this.processManager = new ProcessManager()
    const initPID = this.processManager.alloc_pid()
    this.terminalProcess = new Process(this.processManager, initPID , "~/" , "" , new Terminal({stdin: "", cwd: "~/", pid: initPID, procManager: this.processManager }))
    this.processManager.proc.set(initPID, this.terminalProcess )
  }

  boot() {
    console.log("SYSTEM: Booting")
    const terminalProgram = this.terminalProcess.program as Terminal
    terminalProgram.init()
  }

}