function commandFactory(
    branch,
    clone,
    commit,
    pull,
    push,
    status
) {

    const commandRunners = {
        branch,
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