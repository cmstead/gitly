function push(
    pullBuilder
) {

    function push(args, onComplete = () => null) {
        pushBuilder.build(args)();
    }

    return push;
}

module.exports = push;