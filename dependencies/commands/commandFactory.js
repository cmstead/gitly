function commandFactory(
    commit,
    pull
) {
    const commandRunners = {
        commit,
        pull
    };

    return function (commandName) {
        return commandRunners[commandName.toLowerCase()];
    };
}

module.exports = commandFactory;