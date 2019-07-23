function statusBuilder(commandExecutor) {

    function build({
        short = false
    }) {

        let commandTokens = ['git', 'status'];

        if(short) {
            commandTokens.push('--short');
        }

        return commandExecutor(commandTokens);

    }

    return {
        build
    };
}

module.exports = statusBuilder;