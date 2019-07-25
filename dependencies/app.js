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
            .then(function (data) {
                if (data.command.toLowerCase() === 'exit') {
                    process.exit(0);
                } else {
                    const commandOption = data.command.split(' (')[0];
                    const commandName = commandDictionary[commandOption];

                    commandFactory(commandName)([], displayMenu);
                }
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