function cliParser(
    commandLineArgs
) {

    function parseMainCommands(parserOptions) {
        const parsedCommand = commandLineArgs(
            [],
            { stopAtFirstUnknown: true }
        );

        const [commandName, ...commandArgs] = parsedCommand._unknown;

        return {
            command: commandName,
            commandArgs: commandArgs
        };
    }

    return {
        parseMainCommands
    };

}

module.exports = cliParser;