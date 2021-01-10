import FSNode from './FSNode'
import { FSDirectoryJSON } from '../../types/FileSystem/FileSystem'

export default class FSDirectory extends FSNode {
  constructor(directoryJSON: FSDirectoryJSON) {
    super(directoryJSON)
  }
}
