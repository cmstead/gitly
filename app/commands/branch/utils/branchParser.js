function branchParser () {
    
    const branchInfoPattern = /^(\*|\s)\s(.+)$/;

    function getBranchInfo(token) {
        return token
            .trim()
            .match(branchInfoPattern)
            .slice(1);
    }

    function buildBranchDataObject(branchInfo) {
        return {
            currentBranch: branchInfo[0] === '*',
            branchName: branchInfo[1]
        };
    }

    function getBranchData(branchOutput) {
        return branchOutput
            .split('\n')
            .filter(value => value.trim() !== '')
            .map(function (token) {
                const branchInfo = getBranchInfo(token);

                return buildBranchDataObject(branchInfo);
            });
    }

    return {
        getBranchData
    };
}

module.exports = branchParser;