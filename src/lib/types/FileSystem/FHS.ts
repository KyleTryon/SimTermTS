import { FSDirectoryJSON, FSNodeType } from './FileSystem'
export const HFS: FSDirectoryJSON = {
  type: FSNodeType.d,
  options: {
    name: "/",
    permissions: 777,
    uid: 100,
    gid: 100
  },
  children: [
    {
      type: FSNodeType.d,
      options: {
        name: "bin",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "boot",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "dev",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "etc",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "home",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children: [
        {
          type: FSNodeType.d,
          options: {
            name: "user",
            permissions: 777,
            uid: 100,
            gid: 100
          },
          children:[
            {
              type: FSNodeType.d,
              options: {
                name: "documents",
                permissions: 777,
                uid: 100,
                gid: 100
              },
              children:[]
            },
            {
              type: FSNodeType.d,
              options: {
                name: "pictures",
                permissions: 777,
                uid: 100,
                gid: 100
              },
              children:[]
            },
            {
              type: FSNodeType.file,
              options: {
                name: "testfile",
                permissions: 777,
                uid: 100,
                gid: 100
              }
            },
            {
              type: FSNodeType.file,
              options: {
                name: "testfile2",
                permissions: 777,
                uid: 100,
                gid: 100
              }
            }
          ]
        }
      ]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "lib",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "media",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "mnt",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "opt",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "sbin",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "srv",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "tmp",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "usr",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
    {
      type: FSNodeType.d,
      options: {
        name: "proc",
        permissions: 777,
        uid: 100,
        gid: 100
      },
      children:[]
    },
  ]
}