const fs = require('fs');
const path = './test/testFont';
function mkdir() {
  fs.stat(path, (err, stats) => {
    if (err) {
      console.error('fs.stat---err', err);
      fs.mkdir(path, {recursive: true}, (mkErr) => {
        if (mkErr) {
          console.error('fs.mkdir---mkErr', mkErr);
          return;
        }
        mkdir();
      })
      return;
    }
    console.log('stats', stats.isDirectory());
  });
}

mkdir();
