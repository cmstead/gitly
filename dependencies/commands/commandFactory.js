function commandFactory(
    commit,
    pull,
    push,
    status
) {
    const commandRunners = {
        commit,
        pull,
        push,
        status
    };

    return function (commandName) {
        return commandRunners[commandName.toLowerCase()];
    };
}

module.exports = commandFactory;