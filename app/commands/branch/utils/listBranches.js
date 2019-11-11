function listBranches(
    branchCommandBuilder,
    branchParser,
    commandExecutor
) {

    function loadBranchData({
        showAll = false,
        showRemote = false
    }) {
        const commandTokens = branchCommandBuilder
            .getBranchListCommandTokens({
                showAll,
                showRemote
            });

        const branchOutput = commandExecutor({
            commandTokens
        })();

        return branchParser.getBranchData(branchOutput);

    }

    function listLocalBranches() {
        return loadBranchData({});
    }

    function listRemoteBranches() {
        return loadBranchData({
            showRemote: true
        });
    }

    function listAllBranches() {
        return loadBranchData({
            showAll: true
        });
    }

    return {
        listAllBranches,
        listLocalBranches,
        listRemoteBranches
    };
}

module.exports = listBranches;