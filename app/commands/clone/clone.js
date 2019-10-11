function clone(
    cloneBuilder,
    staticActions
) {

    function clone(args, onComplete = staticActions.doNothing) {
        const [repositoryUrl, directoryName] = args;
        if (typeof repositoryUrl !== 'undefined') {
            cloneBuilder.build({
                repositoryUrl,
                directoryName
            })();

            onComplete();
        } else {
            console.log('menu options will display here');
        }
    }

    return clone;
}

module.exports = clone;