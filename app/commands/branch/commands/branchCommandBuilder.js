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

        let finalCommand = baseBranchCommand;

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

    return {
        getBranchAddCommandTokens,
        getBranchCheckoutCommandTokens,
        getBranchListCommandTokens
    };
}

module.exports = branchCommandBuilder;