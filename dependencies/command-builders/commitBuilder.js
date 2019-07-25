function commitBuilder(
    commandExecutor
) {

    function build({
        commitAll = false,
        message = null,
        commitByFileDiff = false
    }) {

        let commandTokens = ['git', 'commit'];

        
        if(commitAll) {
            commandTokens.push('--all');
        } else if(commitByFileDiff) {
            commandTokens.push('--patch');
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