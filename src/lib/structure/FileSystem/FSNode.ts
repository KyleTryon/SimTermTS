import { FSNodeJSON, FSNodeOptions, FSNodeType } from '../../types/FileSystem/FileSystem'

export default class FSNode implements FSNodeJSON {
  type: FSNodeType
  options: FSNodeOptions
  children: FSNodeJSON[] | undefined

  constructor(fsNode: FSNodeJSON) {
    this.type = fsNode.type
    this.options = fsNode.options
    this.children = fsNode.children
  }

}