function commandExecutor(childProcess) {
    return function (commandTokens) {
        return function () {
            childProcess.execSync(commandTokens.join(' '));
        }
    }
}

module.exports = commandExecutor;