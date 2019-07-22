function addBuilder(
    commandExecutor
) {
    function build({
        addAll = true
    }) {
        let commandTokens = ['git', 'add'];

        if (addAll) {
            commandTokens.push('--all');
        }

        return commandExecutor(commandTokens);
    }

    return {
        build
    }
}

module.exports = addBuilder;