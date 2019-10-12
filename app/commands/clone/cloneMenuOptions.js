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

    function getUsernameOptions() {
        return [
            {
                name: 'username',
                message: 'What is the username are you cloning from?'
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

        getCloneUriOptions,
        getMainMenuOptions,
        getRepoListOptions,
        getUsernameOptions
    }
}


module.exports = cloneMenuOptions;