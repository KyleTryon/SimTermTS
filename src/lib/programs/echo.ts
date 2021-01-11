import { ProgramClass } from "../types/Program"
import IOStream from '../structure/OS/Process/IOStream'
import { ErrorCode, ErrorCodeMap } from '../types/OS/Process/ErrorNo'

export default class ProgramEcho implements ProgramClass {
  alias = "echo"
  async execute(stream: IOStream): Promise<IOStream> {
    const outputArray = stream.stdin.split(" ")
    outputArray.shift()
    const output = outputArray.join(" ")
    return Promise.resolve({
      stdin: "",
      stdout: output,
      stderr: ErrorCodeMap.get(0) as ErrorCode
    })
  }
}