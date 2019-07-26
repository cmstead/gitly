function pull(
    pullBuilder
) {

    function pull(args, onComplete = () => null) {
        pullBuilder.build(args)();
        onComplete();
    }

    return pull;
}

module.exports = pull;