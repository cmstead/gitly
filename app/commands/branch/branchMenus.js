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

    function showDeleteMenu() {
        return inquirer
            .prompt(branchMenuOptions.deleteOptions);
    }

    return {
        showAddMenu,
        showCheckoutMenu,
        showDeleteMenu,
        showMainBranchMenu
    };
}

module.exports = branchMenus;