const os = require('os');
const rimraf = require('rimraf');
const path = require('path');

const DIR = path.join(os.tmpdir(), 'jest_pupeteer_global_setup');
module.exports = async function() {
    await global.__BROWSER_GLOBAL__.close();

    rimraf.sync(DIR);
}