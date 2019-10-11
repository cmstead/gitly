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

    return {
        getCloneType,
        getCloneUri
    };
}

module.exports = cloneMenus;