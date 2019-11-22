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

    function listBranches({
        flags,
        stdioOption,
        showCommand
    }) {
        const finalStdioOption = stdioOption 
            ? stdioOption
            : 'inherit';

        const branchListOptions = getBranchListOptions(flags);
        const commandTokens = branchCommandBuilder
            .getBranchListCommandTokens(branchListOptions);
        
        return commandExecutor({
            commandTokens,
            stdioOption: finalStdioOption,
            showCommand
        })();
    }

    return {
        listBranches
    };
}

module.exports = showBranchList;