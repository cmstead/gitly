function status(
    statusBuilder,
    staticActions
) {

    function status(_, onComplete = staticActions.doNothing) {
        const result = statusBuilder.build({ showOutput: true })();

        console.log(result);

        onComplete();
    }

    return status;
}

module.exports = status;