function pullBuilder(
    commandExecutor
) {
    function build({
        remoteName = 'origin',
        branchName = 'master'
    }) {
        const commandTokens = [
            'git',
            'pull',
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

module.exports = pullBuilder;