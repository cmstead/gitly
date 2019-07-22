function commandFactory(
    commit
) {
    return function (commandName) {

        return commit;
    };
}

module.exports = commandFactory;