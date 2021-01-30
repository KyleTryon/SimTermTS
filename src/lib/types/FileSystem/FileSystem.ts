
export interface FSNodeOptions {
  name: string
  permissions: number
  uid: number
  gid: number
}

export enum FSNodeType {
  file = "file",
  d = "directory",
  c = "character device file",
  b = "block device file",
  s = "local socket file",
  p = "named pipe",
  l = "symbolic link"
}

export interface FSNodeJSON {
  type: FSNodeType,
  options: FSFileOptions | FSDirectoryOptions
  children?: FSNodeJSON[]
}

export interface FSFileJSON extends FSNodeJSON {
  type: FSNodeType.file,
  options: FSFileOptions
}

export interface FSFileOptions extends FSNodeOptions {
  content: string
  commandModulePath?: string
}

export interface FSDirectoryJSON extends FSNodeJSON {
  type: FSNodeType.d,
  options: FSDirectoryOptions
  children: FSNodeJSON[]
}

export interface FSDirectoryOptions extends FSNodeOptions {
}