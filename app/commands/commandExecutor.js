function commandExecutor(processService) {

    function executeCommand(command, stdioOption) {
        let options = {
            encoding: 'utf8'
        }

        if(typeof stdioOption === 'string') {
            options.stdio = stdioOption;
        }

        return processService.execSync(command, options);
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
        showCommand = true,
        stdioOption = null
    }) {
        return function () {
            let result = null;

            const actionSet = buildActionSet(showCommand);
            const command = commandTokens.join(' ');
            const callAction = action => result = action(command, stdioOption);

            actionSet.forEach(callAction);

            return result;
        }
    }
}

module.exports = commandExecutor;