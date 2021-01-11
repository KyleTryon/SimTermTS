import IOStream from '../structure/OS/Process/IOStream'
export interface ProgramClass {
  alias: string,
  async execute(stream: IOStream): Promise<IOStream>
}