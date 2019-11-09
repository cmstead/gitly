function branchUtils (
    listBranches
) {
    
    function doesBranchExist(branchName) {
        const branchData = listBranches.listAllBranches();
        const branchPattern = new RegExp(`${branchName}$`, 'i');

        function isMatchingBranch(branchRecord) {
            return branchRecord.branchName
                .test(branchPattern);
        }

        return branchData.find(isMatchingBranch) !== null;

    }


    return {
        doesBranchExist
    };
}

module.exports = branchUtils;