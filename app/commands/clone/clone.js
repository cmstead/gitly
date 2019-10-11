function clone(
    cloneBuilder,
    cloneMenus,
    cloneTypes,
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