function menuService(
    inquirer,
    staticActions,
    commitMenuOptions,
    mainMenuOptions,
    pauseMenuOptions,
    uncommittedFileSelectOptions
) {


    function showMainMenu() {
        return inquirer.prompt(mainMenuOptions);
    }

    function showCommitOptions() {
        return inquirer.prompt(commitMenuOptions);
    }

    function selectUncommittedFiles() {
        return inquirer
    .prompt(uncommittedFileSelectOptions());
    }

    function showPauseMenu(mainMenuReturn) {
        console.log('');
        return inquirer
        .prompt(pauseMenuOptions)
        .then(function(data) {
            const isExit = data.returnOrExit === 'Exit';
            const nextAction = isExit
                ? staticActions.exit
                : mainMenuReturn;

            nextAction();
        });
    }

    function pauseMenu(mainMenuReturn) {
        if(mainMenuReturn !== staticActions.doNothing) {
            showPauseMenu(mainMenuReturn);
        }
    }

    return {
        pauseMenu,
        showPauseMenu,
        showMainMenu,
        showCommitOptions,
        selectUncommittedFiles
    };

}

module.exports = menuService;