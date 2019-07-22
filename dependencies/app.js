function app(
    cliParser,
    commandDictionary,
    commandFactory,
    inquirer,
    mainCliOptions,
    mainMenuOptions
) {

    const {
        command,
        commandArgs
    } = cliParser.parseMainCommands(mainCliOptions);

    function displayMenu() {
        inquirer
            .prompt(mainMenuOptions)
            .then(function(data) {
                const commandOption = data.command;
                const commandName = commandDictionary[commandOption];

                commandFactory(commandName)();
            });
    }

    if(typeof command === 'string') {
        commandFactory(command)(commandArgs);
    } else {
        displayMenu();
    }

}

module.exports = app;