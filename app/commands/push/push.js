function push(
    pushBuilder,
    staticActions
) {

    function push(args, onComplete = staticActions.doNothing) {
        pushBuilder.build(args)();

        onComplete();
    }

    return push;
}

module.exports = push;