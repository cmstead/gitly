function commandExecutor(childProcess) {
    return function (commandTokens) {
        return function () {
            const command = commandTokens.join(' ');

            console.log(`Executing command: ${command}`)

            return childProcess.execSync(command, { encoding: 'utf8' });
        }
    }
}

module.exports = commandExecutor;