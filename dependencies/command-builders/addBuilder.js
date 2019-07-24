function addBuilder(
    commandExecutor
) {
    function build({
        addAll = false,
        files = []
    }) {
        let commandTokens = ['git', 'add'];

        if (addAll) {
            commandTokens.push('--all');
        } else if(files.length > 0) {
            commandTokens = commandTokens.concat(files);
        }

        return commandExecutor({
            commandTokens: commandTokens
        });
    }

    return {
        build
    }
}

module.exports = addBuilder;