function commandExecutor(childProcess) {
    return function (commandTokens) {
        return function () {
            const command = commandTokens.join(' ');

            console.log(`Executing command: ${command}`)

            childProcess.execSync(command);
        }
    }
}

module.exports = commandExecutor;