function cliParser(
    commandLineArgs,
    mainCliOptions
) {

    function parseMainCommands() {
        const parsedCommand = commandLineArgs(
            mainCliOptions,
            { stopAtFirstUnknown: true }
        );

        const args = Boolean(parsedCommand._unknown)
            ? parsedCommand._unknown
            : [];

        return {
            command: args[0],
            commandArgs: args.slice(1)
        };
    }

    function parseSecondaryCommands(parserOptions, argv) {
        const behaviorOptions = {
            argv,
            stopAtFirstUnknown: true
        }
        const parsedCommand = commandLineArgs(parserOptions, behaviorOptions);

        return parsedCommand;
    }

    return {
        parseMainCommands,
        parseSecondaryCommands
    };

}

module.exports = cliParser;