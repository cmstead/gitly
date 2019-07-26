function pull(
    menuService,
    pullBuilder,
    staticActions
) {

    function pull(args, onComplete = staticActions.doNothing) {
        pullBuilder.build(args)();

        menuService.pauseMenu(onComplete);
    }

    return pull;
}

module.exports = pull;