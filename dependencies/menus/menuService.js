function menuService(
    inquirer,
    staticActions,

    commitOptions,
    mainMenuOptions,
    uncommittedFileSelectOptions
) {

    function showMainMenu() {
        return inquirer.prompt(mainMenuOptions);
    }

    function showCommitOptions() {
        return inquirer.prompt(commitOptions);
    }

    function selectUncommittedFiles() {
        return inquirer.prompt(uncommittedFileSelectOptions);
    }

    function showPauseMenu(mainMenuReturn) {
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
        showMainMenu,
        showCommitOptions,
        selectUncommittedFiles
    };

}

module.exports = menuService;