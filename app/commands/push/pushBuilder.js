function pushBuilder(
    commandExecutor
) {
    function build({
        remoteName = 'origin',
        branchName = 'master'
    }) {
        const commandTokens = [
            'git',
            'push',
            remoteName,
            branchName
        ];

        return commandExecutor({
            commandTokens
        });
    }

    return {
        build
    }
}

module.exports = pushBuilder;