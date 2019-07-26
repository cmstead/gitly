function push(
    pushBuilder
) {

    function push(args, onComplete = () => null) {
        pushBuilder.build(args)();
        onComplete();
    }

    return push;
}

module.exports = push;