function branchUtils(
    listBranches
) {

    function doesBranchExist(branchName) {
        const branchData = listBranches.listAllBranches({});
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