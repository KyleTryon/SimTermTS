export interface ErrorCode {
  errorNo: number
  errorCode: string,
  description: string
}

export const ErrorCodeMap = new Map<number, ErrorCode>([
  [0, {errorNo: 0, errorCode: "SUCCESS", description: "Operation successfully completed"}],
  [1, {errorNo: 1, errorCode: "EPERM", description: "Operation not permitted"}],
  [2, {errorNo: 2, errorCode: "ENOENT", description: "No such file or directory"}],
  [3, {errorNo: 3, errorCode: "ESRCH", description: "No such process"}],
  [17, {errorNo: 17, errorCode: "EEXIST", description: "File exists"}],
  [20, {errorNo: 20, errorCode: "ENOTDIR", description: "Not a directory"}],
  [21, {errorNo: 21, errorCode: "EISDIR", description: "Is a directory"}],
  [27, {errorNo: 27, errorCode: "EFBIG", description: "File too large"}],
  [36, {errorNo: 36, errorCode: "ENAMETOOLONG", description: "File name too long"}],
  [39, {errorNo: 39, errorCode: "ENOTEMPTY", description: "Directory not empty"}]
])
