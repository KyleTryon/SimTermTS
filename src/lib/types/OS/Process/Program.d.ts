import { ProcessManager } from "../../../structure/OS/Process"

export interface ProgramOptions {
  stdin: string
  cwd: string
  pid: number
  procManager: ProcessManager
}