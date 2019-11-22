function branchCommandBuilder () {
    
    const baseBranchCommand = [
        'git',
        'branch'
    ];

    const baseCheckoutCommand = [
        'git',
        'checkout'
    ];

    function getBranchListCommandTokens({
        showAll = false,
        showRemote = false
    }) {

        let finalCommand = baseBranchCommand.slice(0);

        if (showAll) {
            finalCommand.push('-a');
        } else if (showRemote) {
            finalCommand.push('-r');
        }

        return finalCommand;
    }

    function getBranchAddCommandTokens(branchName) {
        return baseBranchCommand.concat(branchName);
    }

    function getBranchCheckoutCommandTokens(branchName) {
        return baseCheckoutCommand.concat(branchName);
    }

    function getBranchDeleteCommandTokens(branchName) {
        return baseBranchCommand.concat(branchName);
    }

    return {
        getBranchAddCommandTokens,
        getBranchCheckoutCommandTokens,
        getBranchDeleteCommandTokens,
        getBranchListCommandTokens
    };
}

module.exports = branchCommandBuilder;