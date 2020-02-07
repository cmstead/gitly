function mergeBranch (
    branchCommandBuilder,
    branchUtils,
    commandExecutor
) {
    
    function executeBranchMerge(branchName) {
        const commandTokens = branchCommandBuilder
            .getBranchMergeCommandTokens(branchName);

        commandExecutor({
            commandTokens,
            stdioOption: 'inherit'
        })();
    }

    function mergeBranch(branchName) {
        const branchExists = branchUtils.doesBranchExist(branchName);

        if(!branchExists) {
            console.log(`Cannot perform checkout. Branch '${branchName}' does not exist.`)
        } else {
            executeBranchMerge(branchName)
        }
    }

    return {
        mergeBranch
    };
}

module.exports = mergeBranch;