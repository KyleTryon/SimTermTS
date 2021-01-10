export enum ProcessState {
  R = "TASK_RUNNING",
  W = "TASK_INTERRUPTIBLE",
  S = "TASK_STOPPED",
  Z = "TASK_ZOMBIE"
}

export interface ProcessRequest {
  cmd: string,
  cmdline: string
  uid: number,
}

export interface ProcessData extends ProcessRequest {
  time: number,
  state: ProcessState
}