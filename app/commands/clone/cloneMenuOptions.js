function cloneMenuOptions(
    cloneTypes
) {

    function getMainMenuOptions() {
        return [
            {
                name: 'cloneType',
                message: 'Clone repository from where?',
                type: 'list',
                choices: Object.values(cloneTypes)
            },
        ];
    };

    function getRepoListOptions(repoNames) {
        return [
            {
                name: 'selectedRepo',
                message: 'Which repo do you want to clone?',
                type: 'list',
                choices: repoNames
            }
        ];
    }

    function getAccountNameOptions() {
        return [
            {
                name: 'accountName',
                message: 'Which account are you cloning from?'
            }
        ];
    }

    function getCloneUriOptions() {
        return [
            {
                name: 'cloneUri',
                message: 'Git repository URI to clone from:'
            }
        ];
    }

    return {
        cloneTypes,

        getAccountNameOptions,
        getCloneUriOptions,
        getMainMenuOptions,
        getRepoListOptions
    }
}


module.exports = cloneMenuOptions;