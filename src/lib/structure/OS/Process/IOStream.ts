import { ErrorCode } from '../../../types/OS/Process/ErrorNo'
export default class IOStream {
  stdin: string
  stdout: string
  stderr: ErrorCode

  constructor(stderr: ErrorCode, stdin: string, stdout: string) {
    this.stdin = stdin
    this.stdout = stdout
    this.stderr = stderr
  }
}