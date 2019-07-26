function pull(
    pullBuilder,
    staticActions
) {

    function pull(args, onComplete = staticActions.doNothing) {
        pullBuilder.build(args)();
        onComplete();
    }

    return pull;
}

module.exports = pull;