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

module.exports = {
  checkFileType,
  getFileType,
  allRight,
  checkHttps,
}
