import * as ReadLine from 'readline'
import ProcessManager from '../OS/Process'

export default class Terminal {
  processManger: ProcessManager

  constructor(processManager: ProcessManager) {
    this.processManger = processManager
  }

  cli: ReadLine.Interface = ReadLine.createInterface({
    output: process.stdout,
    input: process.stdin,
    prompt: "user@machine:~/$ ",
    terminal: false
  })

  init() {
    this.cli.prompt()

    this.cli.on('line', async (line) => {
      const result = await this.processManger.schedule({
        cmdline: line,
        cmd: line.split(" ")[0],
        uid: 1000
      })
      // Print the command output
      console.log(result.stdout)

      this.cli.prompt()
    })
  }

}