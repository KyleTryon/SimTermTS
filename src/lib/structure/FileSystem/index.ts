import FSNode from './FSNode'
import FSDirectory from './FSDirectory'
import FSFile from './FSFile'
import { HFS } from '../../types/FileSystem/FHS'
import * as fs from 'fs'
import { FSDirectoryJSON, FSDirectoryOptions } from '../../types/FileSystem/FileSystem'

export default class FileSystem {
  private _storageLocation: string = "./FileSystemStorage.json"

  initialize() {
    console.log("SYSTEM: Filesystem initializing.")
    let lfs: FSDirectory
    if (! fs.existsSync(this._storageLocation)) {
      console.log("SYSTEM: Creating NEW filesystem.")
      fs.writeFileSync(this._storageLocation, JSON.stringify(HFS))
    }
  }

  pathIsValid(path: string): boolean {
    const regex = new RegExp(/[~\.]?\/([\w/]+)?/g)
    return regex.test(path)
  }

  public _getFileSystemJSON(): FSDirectoryJSON {
    return JSON.parse(fs.readFileSync(this._storageLocation).toString())
  }

  /**
   * @param  {string} path
   * @description Expects a full absolute path
   * @returns FSDirectory
   */
  getDirectory(path: string) {
    const lfs = this._getFileSystemJSON()
    let _currentDirData = lfs as FSDirectoryJSON
    path = this.sanatizePath(path)
    const pathArray = path.split("/")
    // Ignore first slash for root 
    pathArray.shift()
    for (let i = 0; i < pathArray.length - 1; i++) {
      const children = _currentDirData.children
      if (children) {
        const childDir = children.filter(child => child.options.name == pathArray[i])
        if (childDir[0].type == "directory") {
          _currentDirData = childDir[0] as FSDirectoryJSON
        } else {
          throw new Error('Not a directory')
        }
      } else {
        throw new Error('No such file or directory')
      }
    }
    return this.getChildDirectory(_currentDirData, pathArray.pop() as string)
  }

  getChildDirectory(parent: FSDirectoryJSON, target: string): FSDirectoryJSON {
    if (parent.children) {
      const childTarget = parent.children.filter(child => child.options.name == target)
      if (childTarget[0].type == "directory") {
        return childTarget[0] as FSDirectoryJSON
      } else {
        throw new Error('Not a directory')
      }
    } else {
      throw new Error('No such file or directory')
    }
  }

  sanatizePath(path: string): string {
    return path.endsWith('/') ?
      path.slice(0, -1) :
      path
  }
}