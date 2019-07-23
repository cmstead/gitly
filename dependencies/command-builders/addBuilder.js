function addBuilder(
    commandExecutor
) {
    function build({
        addAll = false
    }) {
        let commandTokens = ['git', 'add'];

        if (addAll) {
            commandTokens.push('--all');
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