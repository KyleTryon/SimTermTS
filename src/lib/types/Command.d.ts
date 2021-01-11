// inspiration from https://www.npmjs.com/package/command-line-args


export type CommandOptionType = boolean | string | number

export interface CommandOptionDef {
  name: string,
  alias: string,
  type: CommandOptionType,
  multiple: Boolean = false
}

export type CommandOptions = Array<CommandOptionDef>