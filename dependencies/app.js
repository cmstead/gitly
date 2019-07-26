function app(
    cliParser,
    commandDictionary,
    commandFactory,
    mainCliOptions,
    menuService
) {

    const {
        command,
        commandArgs
    } = cliParser.parseMainCommands(mainCliOptions);

    function getSelectionValue(data) {
        return data.command.split(' (')[0];
    }

    function runCommand(commandOption) {
        const commandName = commandDictionary[commandOption];

        commandFactory(commandName)([], displayMenu);

    }

    function exit() {
        process.exit(0);
    }

    function executeSelectedCommand(data) {
        commandOption = getSelectionValue(data);
        const isExitCommand = commandOption === 'exit';
        const commandAction = isExitCommand
            ? exit
            : runCommand;

        commandAction(commandOption);
    }

    function displayMenu() {
        menuService.showMainMenu()
            .then(executeSelectedCommand)
            .catch(function (error) {
                console.log('An unexpected error occurred from the main menu: ', error.message);
            });
    }


    function displayMainMenu() {
        if (typeof command === 'string') {
            commandFactory(command)(commandArgs);
        } else {
            displayMenu();
        }
    }

    displayMainMenu();

}

module.exports = app;