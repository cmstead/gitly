function branchMenus(
    branchMenuOptions,
    showBranchList,
    inquirer
) {

    function parseBranches(branches) {
        const branchLines = branches.split('\n');

        return branchLines
            .map(line => line.substr(2).trim())
            .filter(line => !line.includes('->') && line !== '');
    }

    function getBranchList() {
        const branchOutput = showBranchList.listBranches({
            flags: [],
            stdioOption: 'pipe',
            showCommand: false
        });

        return parseBranches(branchOutput);
    }

    function showMainBranchMenu() {
        return inquirer
            .prompt(branchMenuOptions.mainBranchOptions);
    }

    function showCheckoutMenu() {
        branchMenuOptions
            .checkoutOptions[0].choices = getBranchList();

        return inquirer
            .prompt(branchMenuOptions.checkoutOptions);
    }

    function showMergeMenu() {
        branchMenuOptions
            .mergeOptions[0].choices = getBranchList();

        return inquirer
            .prompt(branchMenuOptions.mergeOptions);
    }

    function showAddMenu() {
        return inquirer
            .prompt(branchMenuOptions.addOptions);
    }

    function showDeleteMenu() {

        branchMenuOptions
            .deleteOptions[0].choices = getBranchList();

        return inquirer
            .prompt(branchMenuOptions.deleteOptions);
    }

    function showContinueBranchWorkMenu() {
        return inquirer
            .prompt(branchMenuOptions.continueBranchWork);
    }

    return {
        showAddMenu,
        showCheckoutMenu,
        showContinueBranchWorkMenu,
        showDeleteMenu,
        showMainBranchMenu,
        showMergeMenu
    };
}

module.exports = branchMenus;