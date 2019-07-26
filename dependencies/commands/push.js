function push(
    menuService,
    pushBuilder,
    staticActions
) {

    function push(args, onComplete = staticActions.doNothing) {
        pushBuilder.build(args)();

        menuService.pauseMenu(onComplete);
    }

    return push;
}

module.exports = push;