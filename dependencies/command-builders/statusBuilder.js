function statusBuilder(commandExecutor) {

    function build({
        short = false,
        showCommand = true,
        showOutput = false
    }) {

        let commandTokens = ['git', 'status'];

        if(short) {
            commandTokens.push('--short');
        }

        return commandExecutor({
            commandTokens,
            showCommand,
            stdioOption: showOutput
        });

    }

    return {
        build
    };
}

module.exports = statusBuilder;