function commandFactory(
    clone,
    commit,
    pull,
    push,
    status
) {
    const commandRunners = {
        clone,
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