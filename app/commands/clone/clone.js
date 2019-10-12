function clone(
    cloneBuilder,
    cloneMenus,
    cloneTypes,
    githubService,
    staticActions
) {

    function runCloneCommand(repositoryUrl, directoryName) {
        cloneBuilder.build({
            repositoryUrl,
            directoryName
        })();
    }

    function showCloneFromUriMenu() {
        return cloneMenus
            .getCloneUri()
            .then(({ cloneUri }) =>
                Promise.resolve(cloneUri));
    }

    function showRepoSelectionMenu(repoDictionary) {
        return cloneMenus
            .getGithubRepo(repoDictionary)
            .then(function ({ selectedRepo }) {
                return Promise.resolve(repoDictionary[selectedRepo]);
            });
    }

    function showCloneFromGithubMenu() {
        return cloneMenus
            .getGithubUsername()
            .then(function ({ username }) {
                return githubService.getRepoDictionary(username);
            })
            .then(function (repoDictionary) {
                return showRepoSelectionMenu(repoDictionary);
            });
    }

    function clone(args, onComplete = staticActions.doNothing) {
        const [repositoryUrl, directoryName] = args;
        if (typeof repositoryUrl !== 'undefined') {
            runCloneCommand(repositoryUrl, directoryName);

            onComplete();
        } else {
            cloneMenus
                .getCloneType()
                .then(function ({ cloneType }) {
                    if (cloneType === cloneTypes.cloneUri) {
                        return showCloneFromUriMenu();
                    } else {
                        return showCloneFromGithubMenu();
                    }
                })
                .then(function (cloneUri) {
                    runCloneCommand(cloneUri);

                    onComplete();
                });
        }
    }

    return clone;
}

module.exports = clone;