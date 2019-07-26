function menuService(
    inquirer,

    commitOptions,
    uncommittedFileSelect
) {

    function showCommitOptions() {
        return inquirer.prompt(commitOptions);
    }

    function selectUncommittedFiles() {
        return inquirer.prompt(uncommittedFileSelect);
    }

    return {
        showCommitOptions,
        selectUncommittedFiles
    };

}

module.exports = menuService;