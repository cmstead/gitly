function cloneMenus (
    inquirer,
    cloneMenuOptions
) {
    
    function getCloneType() {
        const options = cloneMenuOptions.getMainMenuOptions();
        return inquirer.prompt(options);
    }

    function getCloneUri() {
        const options = cloneMenuOptions.getCloneUriOptions();
        return inquirer.prompt(options);
    }

    function getGithubUsername() {
        const options = cloneMenuOptions.getUsernameOptions();

        return inquirer.prompt(options);
    }

    function getGithubRepo(repoDictionary) {
        const options = cloneMenuOptions
            .getRepoListOptions(Object.keys(repoDictionary));

        return inquirer.prompt(options);
    }

    return {
        getCloneType,
        getCloneUri,
        getGithubRepo,
        getGithubUsername
    };
}

module.exports = cloneMenus;