function listBranches(
    branchCommandBuilder,
    branchParser,
    commandExecutor
) {

    function loadBranchData({
        showAll = false,
        showRemote = false,
        stdioOption = 'inherit',
        showCommand = true
    }) {
        const commandTokens = branchCommandBuilder
            .getBranchListCommandTokens({
                showAll,
                showRemote
            });

        const branchOutput = commandExecutor({
            commandTokens,
            stdioOption,
            showCommand
        })();

        return branchParser.getBranchData(branchOutput);

    }

    function listLocalBranches({
        stdioOption = 'inherit',
        showCommand = true
    }) {
        return loadBranchData({
            stdioOption,
            showCommand
        });
    }

    function listRemoteBranches({
        stdioOption = 'inherit',
        showCommand = true
    }) {
        return loadBranchData({
            showRemote: true,
            stdioOption,
            showCommand
        });
    }

    function listAllBranches({
        stdioOption = 'inherit',
        showCommand = true
    }) {
        return loadBranchData({
            showAll: true,
            stdioOption,
            showCommand
        });
    }

    return {
        listAllBranches,
        listLocalBranches,
        listRemoteBranches
    };
}

module.exports = listBranches;