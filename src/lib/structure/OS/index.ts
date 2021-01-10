import FileSystem from "../FileSystem"
import ProcessManager from './Process'
import Terminal from "../Terminal"

import * as path from 'path'
import * as fs from 'fs'

export default class OS {
  user: string = "root"
  domain: string = "TERM"

  fileSystem: FileSystem
  processManager: ProcessManager
  terminal: Terminal

  constructor() {
    this.fileSystem = new FileSystem()
    this.processManager = new ProcessManager()
    this.terminal = new Terminal(this.processManager)
  }

  boot() {
    this.terminal.init()
  }


}