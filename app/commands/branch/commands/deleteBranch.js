function deleteBranch(
    branchCommandBuilder,
    branchUtils,
    commandExecutor
) {

    function executeDeleteBranchCommand(branchName) {
        const commandTokens = branchCommandBuilder
            .getBranchDeleteCommandTokens(branchName);

        commandExecutor({
            commandTokens,
            stdioOption: 'inherit'
        })();
    }

    function deleteBranch(branchName) {
        const branchExists = branchUtils.doesBranchExist(branchName);
        if (!branchExists) {
            console.log(`Cannot delete branch. Branch, '${branchName}', does not exist.`);
        } else {
            executeDeleteBranchCommand(['-D', branchName]);
        }
    }

    return {
        deleteBranch
    };
}

module.exports = deleteBranch;