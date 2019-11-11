function app(
    clear,
    cliParser,
    commandDictionary,
    commandFactory,
    mainCliOptions,
    menuService,
    staticActions
) {


    const {
        command,
        commandArgs
    } = cliParser.parseMainCommands(mainCliOptions);
    const returnToMenu = () => displayMenu({});
    const pauseAndReturnToMenu = () =>
        menuService.showPauseMenu(returnToMenu);

    function getSelectionValue(data) {
        return data.command.split(' (')[0];
    }

    function runCommand(commandOption) {
        const commandName = commandDictionary[commandOption];

        commandFactory(commandName)([], pauseAndReturnToMenu);

    }

    function isExitCommand(commandOption) {
        return commandOption.trim() === ''
            || commandOption.toLowerCase() === 'exit';
    }

    function executeSelectedCommand(data) {
        commandOption = getSelectionValue(data);
        const commandAction = isExitCommand(commandOption)
            ? staticActions.exit
            : runCommand;

        commandAction(commandOption);
    }

    function displayMenu({ firstRun = false }) {
        clear();

        if (firstRun) {
            console.log('Gitly -- The friendly git utility\n');
        }

        console.log('Main menu');
        console.log('---------\n')

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
            displayMenu({ firstRun: true });
        }
    }

    displayMainMenu();

}

module.exports = app;