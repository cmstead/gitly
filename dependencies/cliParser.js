function cliParser(
    commandLineArgs
) {

    function parseMainCommands() {
        const parsedCommand = commandLineArgs(
            [],
            { stopAtFirstUnknown: true }
        );

        const [commandName, ...commandArgs] = parsedCommand._unknown
            ? parsedCommand._unknown
            : [];

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