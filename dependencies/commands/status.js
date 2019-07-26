function status(
    menuService,
    statusBuilder,
    staticActions
) {

    function status(_, onComplete = staticActions.doNothing) {
        const result = statusBuilder.build({ showOutput: true })();

        console.log(result);

        menuService.pauseMenu(onComplete);
    }

    return status;
}

module.exports = status;