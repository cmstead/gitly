function pull(
    pullBuilder
) {

    function pull(args, onComplete = () => null) {
        pullBuilder.build(args)();
    }

    return pull;
}

module.exports = pull;