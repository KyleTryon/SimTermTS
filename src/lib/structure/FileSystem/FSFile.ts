import FSNode from './FSNode'
import { FSFileJSON } from '../../types/FileSystem/FileSystem'

export default class FSFile extends FSNode {

  constructor(fileJSON: FSFileJSON) {
    super(fileJSON)
    this.type = fileJSON.type
  }
  get size(): Number {
    return 0
  }
}