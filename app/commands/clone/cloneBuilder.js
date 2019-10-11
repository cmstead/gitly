function cloneBuilder (
    commandExecutor
) {
    
    function build({
        repositoryUrl,
        directoryName
    }) {
        let commandTokens = [
            'git',
            'clone',
            repositoryUrl
        ];

        if(typeof directoryName === 'string') {
            commandTokens.push(directoryName);
        }

        return commandExecutor({
            commandTokens,
            stdioOption: 'inherit'
        });
    }

    return {
        build
    };
}

module.exports = cloneBuilder;