import Program from "../structure/Program"
import IOStream from '../structure/OS/Process/IOStream'
import { ErrorCode, ErrorCodeMap } from '../types/OS/Process/ErrorNo'

export default class ProgramEcho extends Program {
  alias = "echo"
  async execute(stream: IOStream): Promise<IOStream> {
    const output = stream.stdin.split(" ").pop()?.toString() ?? ""
    return Promise.resolve({
      stdin: "",
      stdout: output,
      stderr: ErrorCodeMap.get(0) as ErrorCode
    })
  }
}