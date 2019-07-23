function commandExecutor(childProcess) {

    function executeCommand(command) {
        return childProcess.execSync(command, { encoding: 'utf8' });
    }

    function displayCommand(command) {
        console.log(`Executing command: ${command}`)
    }

    function buildActionSet(showCommand) {
        let actionSet = [];

        if (showCommand) {
            actionSet.push(displayCommand);
        }

        actionSet.push(executeCommand);

        return actionSet;
    }

    return function ({
        commandTokens,
        showCommand = true
    }) {
        return function () {
            let result = null;

            const actionSet = buildActionSet(showCommand);
            const command = commandTokens.join(' ');
            const callAction = action => result = action(command);

            actionSet.forEach(callAction);

            return result;
        }
    }
}

module.exports = commandExecutor;