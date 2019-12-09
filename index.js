var exec = require('child_process').exec;
exec('icon-cli xxxxx', function(error, stdout, stderr) {
  // 获取命令执行的输
  console.log(error, `stdout ${stderr}==`, stderr);
});