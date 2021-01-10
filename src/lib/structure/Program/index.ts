import IOStream from '../OS/Process/IOStream'
import { ErrorCode, ErrorCodeMap } from '../../types/OS/Process/ErrorNo'

export default abstract class Program {
  alias: string = ""
  async execute(stream: IOStream): Promise<IOStream> {
    return Promise.resolve({
      stdin: "",
      stdout: "The process has been improperly initialized.",
      stderr: ErrorCodeMap.get(1) as ErrorCode
    })
  }
}