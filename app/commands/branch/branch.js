function branch(
    addBranch,
    branchConstants,
    branchCliOptions,
    branchMenus,
    checkoutBranch,
    cliParser,
    deleteBranch,
    showBranchList,
    staticActions
) {

    function getCheckoutOptions(commandOptionData) {
        if (
            commandOptionData._unknown
            && commandOptionData._unknown.length > 0
        ) {
            return Promise.resolve(commandOptionData);
        } else {
            return branchMenus
                .showCheckoutMenu()
                .then(function (data) {
                    commandOptionData._unknown = [data.branchName];
                    return Promise.resolve(commandOptionData);
                });
        }
    }

    function getAddOptions(commandOptionData) {
        if (
            commandOptionData._unknown
            && commandOptionData._unknown.length > 0
        ) {
            return Promise.resolve(commandOptionData);
        } else {
            return branchMenus
                .showAddMenu()
                .then(function (data) {
                    commandOptionData._unknown = [data.branchName];
                    return Promise.resolve(commandOptionData);
                });
        }
    }

    function getDeleteOptions(commandOptionData) {
        if (
            commandOptionData._unknown
            && commandOptionData._unknown.length > 0
        ) {
            return Promise.resolve(commandOptionData);
        } else {
            return branchMenus
                .showDeleteMenu()
                .then(function (data) {
                    commandOptionData._unknown = [data.branchName];
                    return Promise.resolve(commandOptionData);
                });
        }
    }

    function performBranchAction(args, onComplete) {
        const parsedBranchData = cliParser
            .parseSecondaryCommands(
                branchCliOptions,
                args
            );


        if (parsedBranchData.add) {
            getAddOptions(parsedBranchData)
                .then(function (commandOptions) {
                    const branchName = commandOptions._unknown[0];

                    addBranch.addBranch(branchName);

                    onComplete();
                });

        } else if (parsedBranchData.checkout) {
            getCheckoutOptions(parsedBranchData)
                .then(function (commandOptions) {
                    const branchName = commandOptions._unknown[0];

                    checkoutBranch.checkoutBranch(branchName);

                    onComplete();
                });

        } else if(parsedBranchData.delete) {
            getDeleteOptions(parsedBranchData)
                .then(function (commandOptions) {
                    const branchName = commandOptions._unknown[0];

                    deleteBranch.deleteBranch(branchName);

                    onComplete();
                });

        }else {
            const commandKeys = Object.keys(parsedBranchData);

            showBranchList.listBranches(commandKeys);

            onComplete();
        }
    }

    function commitByMenu(_, onComplete) {
        branchMenus
            .showMainBranchMenu()
            .then(function (data) {
                const branchArgs = [];
                const subcommand = branchConstants[data.subcommand];

                branchArgs.push(`--${subcommand}`);

                performBranchAction(branchArgs, onComplete);
            });
    }

    function branch(args, onComplete = staticActions.doNothing) {
        const argsAreDefined = Array.isArray(args) && args.length > 0;

        if (argsAreDefined) {
            performBranchAction(args, onComplete);
        } else {
            commitByMenu(null, onComplete);
        }
    }

    return branch;
}

module.exports = branch;