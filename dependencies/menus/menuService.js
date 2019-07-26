function menuService(
    inquirer,

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

    return {
        showMainMenu: showMainMenu,
        showCommitOptions,
        selectUncommittedFiles
    };

}

module.exports = menuService;