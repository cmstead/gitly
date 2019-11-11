function branchMenus(
    branchMenuOptions,
    inquirer
) {

    function showMainBranchMenu() {
        return inquirer
            .prompt(branchMenuOptions.mainBranchOptions);
    }

    return {
        showMainBranchMenu
    };
}

module.exports = branchMenus;