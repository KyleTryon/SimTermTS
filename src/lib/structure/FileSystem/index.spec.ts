import { FSDirectoryJSON} from '../../types/FileSystem/FileSystem'
import FSDirectory from './FSDirectory'

const directorySampleEmpty: FSDirectoryJSON = {
  type: "directory",
  options: {
    name: "sample",
    permissions: 777,
    uid: 100,
    gid: 100
  }
}

const directorySampleParent: FSDirectoryJSON = {
  type: "directory",
  options: {
    name: "parent",
    permissions: 777,
    uid: 100,
    gid: 100
  },
  children: [directorySampleEmpty]
}

test('should return fsnode with type of directory', () => {
  const node = new FSDirectory(directorySampleEmpty)
  expect(node.type).toEqual("directory")
})

test('should return an fsdirectory with a single child of type fsdirectory', () => {
  const node = new FSDirectory(directorySampleParent)
  expect(node.children?.length).toEqual(1)
  if (node.children) {
    const child = node.children[0]
    expect(child.type).toEqual("directory")
    expect(child.options.name).toEqual("sample")
  }
})