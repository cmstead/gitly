const childProcessModule = require('child_process');

function processService() {
    return {
        execSync: childProcessModule.execSync
    };
}

module.exports = processService;