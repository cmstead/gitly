function commandFactory(
    commit,
    pull,
    push
) {
    const commandRunners = {
        commit,
        pull,
        push
    };

    return function (commandName) {
        return commandRunners[commandName.toLowerCase()];
    };
}

module.exports = commandFactory;