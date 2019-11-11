function branchMenus(
    branchMenuOptions,
    inquirer
) {

    function showMainBranchMenu() {
        return inquirer
            .prompt(branchMenuOptions.mainBranchOptions);
    }

    function showCheckoutMenu() {
        return inquirer
            .prompt(branchMenuOptions.checkoutOptions);
    }

    function showAddMenu() {
        return inquirer
            .prompt(branchMenuOptions.addOptions);
    }

    return {
        showAddMenu,
        showCheckoutMenu,
        showMainBranchMenu
    };
}

module.exports = branchMenus;