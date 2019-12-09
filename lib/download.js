const https = require('https');
const fs = require('fs');
const spinner = require('ora')();
const chalk = require('./chalk');
const { allRight, getFileType } = require('../utils/tool');
let buf = Buffer.from([]);
module.exports = function (url) {
  return new Promise((resolve, reject) => {
    if (!allRight(url)) {
      return reject('输入的资源地址有误');
    }
    https.get(url, (res) => {
      res.on('data', (d) => {
        totalLength = buf.length + d.length;
        buf = Buffer.concat([buf, d], totalLength);
      });
      res.on('end', (end) => {
        fs.writeFile(`iconfont${getFileType(url)}`, buf, (err) => {
          if (err) {
            spinner.fail(chalk.red('文件保存出错'))
            spinner.stop();
            reject(err);
            return;
          }
          resolve('文件已保存');
        });
      })
    }).on('error', (e) => {
      reject(e);
    });
  })
  
}