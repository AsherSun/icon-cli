const fs = require('fs');
const fsPromises = require('fs').promises;

function checkFileType(fileType) {
  return ['.css', '.js'].includes(fileType)
}

function getFileType(url) {
  const reg = /\.\w{1,}$/ig;
  const fileType = url.match(reg);
  if (!fileType || !fileType[0]) {
    return null;
  }
  return fileType[0];
}

function allRight(url) {
  return checkFileType(getFileType(url));
}

function checkHttps(url) {
  const treatyReg = /^(https:|http:)/gi;
  const lineReg = /^\/\//gi;
  if (lineReg.test(url)) {
    return `https:${url}`;
  }
  if (!treatyReg.test(url)) { // 即不是'//'开头,也不是'https'开头。所以存在是非法输入字符
    return '';
  }
  return url;
}

function checkFile(path) {
  return fsPromises.access(path, fs.constants.R_OK | fs.constants.W_OK);
}

function rmFile(path) {
  return fsPromises.unlink(path);
}

function to(promise) {
  return new Promise((resolve) => {
    promise.then((data) => resolve([void 0, data || true])).catch((err) => resolve([err|| true, void 0]));
  });
}

function mkDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if (err) {
        fs.mkdir(path, {recursive: true}, (err) => {
          if (err) {
            reject();
            return;
          }
          resolve();
        })
        return;
      }
      stats.isDirectory() && resolve();
    });
  })
}

module.exports = {
  checkFileType,
  getFileType,
  allRight,
  checkHttps,
  checkFile,
  rmFile,
  to,
  mkDir,
}
