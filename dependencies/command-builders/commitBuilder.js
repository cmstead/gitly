function commitBuilder(
    commandExecutor
) {

    function build({
        commitAll = false,
        message = null
    }) {

        let commandTokens = ['git', 'commit'];

        
        if(commitAll) {
            commandTokens.push('--all');
        }

        if(message !== null) {
            commandTokens = commandTokens.concat(['-m', `"${message}"`]);
        }


        return commandExecutor({
            commandTokens: commandTokens
        });
    }

    return {
        build
    };

}

module.exports = commitBuilder;