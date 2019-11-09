function showBranchList(
    branchCommandBuilder,
    commandExecutor
) {

    function getBranchListOptions(flags) {
        const options = {};

        if (flags.includes('all')) {
            options.showAll = true;
        } else if (flags.includes('remote')) {
            options.showRemote = true;
        }

        return options;
    }

    function listBranches(flags) {
        const stdioOption = 'inherit';
        const branchListOptions = getBranchListOptions(flags);
        const commandTokens = branchCommandBuilder
            .getBranchListCommandTokens(branchListOptions);
        
        commandExecutor({
            commandTokens,
            stdioOption
        })();
    }

    return {
        listBranches
    };
}

module.exports = showBranchList;