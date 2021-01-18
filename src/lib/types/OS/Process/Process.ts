export enum ProcessState {
  R = "TASK_RUNNING",
  W = "TASK_INTERRUPTIBLE",
  S = "TASK_STOPPED",
  Z = "TASK_ZOMBIE"
}

export interface FileDescriptor {
  stdin: string,
  stdout: string | null,
  stderr: string | null
}

export type ExitCode = number
export type PipeOut = Pick<FileDescriptor, "stdout" | "stderr">
export interface ProcessOutput {
  exitCode: ExitCode,
  output: PipeOut
}
