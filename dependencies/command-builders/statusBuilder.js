function statusBuilder(commandExecutor) {

    function build({
        short = false,
        showCommand = true
    }) {

        let commandTokens = ['git', 'status'];

        if(short) {
            commandTokens.push('--short');
        }

        return commandExecutor({
            commandTokens,
            showCommand
        });

    }

    return {
        build
    };
}

module.exports = statusBuilder;