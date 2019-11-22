function currentBranch(
    listBranches
) {

    function getCurrentBranch(branchList) {
        const currentBranch = branchList
            .find(branch => branch.currentBranch);

        return currentBranch === null
            ? 'Unknown branch'
            : currentBranch.branchName;
    }

    function showCurrentBranch() {
        const branchList = listBranches
            .listAllBranches({
                stdioOption: 'pipe',
                showCommand: false
            });

        const currentBranch = getCurrentBranch(branchList);

        console.log(`\nYou are currently on branch: ${currentBranch}`);
    }

    return {
        showCurrentBranch
    };
}

module.exports = currentBranch;