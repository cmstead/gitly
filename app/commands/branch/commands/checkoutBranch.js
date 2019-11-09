function checkoutBranch(
    branchCommandBuilder,
    branchUtils,
    commandExecutor
) {

    function executeBranchCheckout(branchName) {
        const commandTokens = branchCommandBuilder
            .getBranchCheckoutCommandTokens(branchName);

        commandExecutor({
            commandTokens,
            stdioOption: 'inherit'
        })();
    }

    function checkoutBranch(branchName) {
        const branchExists = branchUtils.doesBranchExist(branchName);

        if(!branchExists) {
            console.log(`Cannot perform checkout. Branch '${branchName}' does not exist.`)
        } else {
            executeBranchCheckout(branchName)
        }
    }

    return {
        checkoutBranch
    };
}

module.exports = checkoutBranch;