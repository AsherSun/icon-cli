
const styles = require('ansi-styles');
module.exports = {
  red(str) {
    return `${styles.red.open}${str}${styles.red.close}`;
  },
  redBright(str) {
    return `${styles.redBright.open}${str}${styles.redBright.close}`;
  },
  green(str) {
    return `${styles.green.open}${str}${styles.green.close}`;
  },
  greenBright(str) {
    return `${styles.greenBright.open}${str}${styles.greenBright.close}`;
  },
  blue(str) {
    return `${styles.blue.open}${str}${styles.blue.close}`;
  },
  blueBright(str) {
    return `${styles.blueBright.open}${str}${styles.blueBright.close}`;
  }
}
