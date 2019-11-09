function addBranch(
    branchCommandBuilder,
    branchUtils,
    commandExecutor
) {

    function executeAddBranchCommand(branchName) {
        const commandTokens = branchCommandBuilder
            .getBranchAddCommandTokens(branchName);

        commandExecutor({
            commandTokens,
            stdioOption: 'inherit'
        })();
    }

    function addBranch(branchName) {
        const branchExists = branchUtils.doesBranchExist(branchName);
        if (branchExists) {
            console.log(`Branch '${branchName}' already exists.`);
        } else {
            executeAddBranchCommand(branchName)
        }
    }

    return {
        addBranch
    };
}

module.exports = addBranch;