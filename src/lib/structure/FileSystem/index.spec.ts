import { FSDirectoryJSON } from '../../types/FileSystem/FileSystem'
import FileSystem from './index'
import FSDirectory from './FSDirectory'

const lfs = new FileSystem()
lfs.initialize()

test('return /bin directory object as JSON', () => {
  const result = lfs.getChildDirectory(lfs._getFileSystemJSON(), "bin")
  const target = { type: 'directory', "children":[], options: { name: 'bin', permissions: 777, uid: 100, gid: 100 } }
  expect(result).toEqual(target)
})

test('return /home/user directory object as JSON', () => {
  const result = lfs.getDirectory("/home/user")
  console.log(result)
  const target = { type: 'directory', options: { name: 'user', permissions: 777, uid: 100, gid: 100 }, children: [] }
  expect(result).toEqual(target)
})
