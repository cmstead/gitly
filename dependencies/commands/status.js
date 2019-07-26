function status(
    statusBuilder
) {

    function status(_, onComplete = () => null) {
        const result = statusBuilder.build({ showOutput: true })();

        console.log(result);

        onComplete();
    }

    return status;
}

module.exports = status;