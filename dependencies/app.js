function app(
    cliParser,
    commandDictionary,
    commandFactory,
    inquirer,
    mainCliOptions,
    mainMenuOptions
) {

    // const parsedCommand = cliParser.parseMainCommands(mainCliOptions);
    // console.log(parsedCommand);
    const {
        command,
        commandArgs
    } = cliParser.parseMainCommands(mainCliOptions);

    function displayMenu() {
        inquirer
            .prompt(mainMenuOptions)
            .then(function (data) {
                const commandOption = data.command;
                const commandName = commandDictionary[commandOption];

                commandFactory(commandName)([], displayMenu);
            })
            .catch(function (error) {
                console.log('An unexpected error occurred from the main menu: ', error.message);
            });
    }

    if (typeof command === 'string') {
        commandFactory(command)(commandArgs);
    } else {
        displayMenu();
    }

}

module.exports = app;