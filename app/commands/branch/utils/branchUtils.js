function branchUtils(
    listBranches
) {

    function getBranchList() {
        return listBranches.listAllBranches({
            flags: ['all'],
            stdioOption: 'pipe',
            showCommand: false
        });
    }

    function doesBranchExist(branchName) {
        const branchData = getBranchList();
        const branchPattern = new RegExp(`${branchName}$`, 'i');

        function isMatchingBranch(branchRecord) {
            return branchPattern
                .test(branchRecord.branchName);
        }

        return Boolean(branchData.find(isMatchingBranch));

    }


    return {
        doesBranchExist
    };
}

module.exports = branchUtils;