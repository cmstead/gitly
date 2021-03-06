function branch(
    addBranch,
    branchConstants,
    branchCliOptions,
    branchMenus,
    checkoutBranch,
    cliParser,
    currentBranch,
    deleteBranch,
    mergeBranch,
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

    function getMergeOptions(commandOptionData) {
        if (
            commandOptionData._unknown
            && commandOptionData._unknown.length > 0
        ) {
            return Promise.resolve(commandOptionData);
        } else {
            return branchMenus
                .showMergeMenu()
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

        } else if (parsedBranchData.delete) {
            getDeleteOptions(parsedBranchData)
                .then(function (commandOptions) {
                    const branchName = commandOptions._unknown[0];

                    deleteBranch.deleteBranch(branchName);

                    onComplete();
                });

        } else if (parsedBranchData.merge) {
            getMergeOptions(parsedBranchData)
                .then(function (commandOptions) {
                    const branchName = commandOptions._unknown[0];

                    mergeBranch.mergeBranch(branchName);

                    onComplete();
                });

        } else if (parsedBranchData.current) {
            currentBranch.showCurrentBranch();

            onComplete();
        } else if (args.includes('--exit')) {
            onComplete();
        } else {
            const commandKeys = Object.keys(parsedBranchData);

            showBranchList.listBranches({
                flags: commandKeys
            });

            onComplete();
        }
    }

    function branchByMenu(_, onComplete) {
        branchMenus
            .showMainBranchMenu()
            .then(function (data) {
                const branchArgs = [];
                const subcommand = branchConstants[data.subcommand];

                branchArgs.push(`--${subcommand}`);

                performBranchAction(branchArgs, onComplete);
            });
    }

    function branchByMenuAndPause(onComplete) {
        branchByMenu(null, function () {
            branchMenus
                .showContinueBranchWorkMenu()
                .then(function (data) {
                    if(data.continueBranchWork) {
                        branchByMenuAndPause(onComplete);
                    } else {
                        onComplete();
                    }
                });
        });
    }

    function branch(args, onComplete = staticActions.doNothing) {
        const argsAreDefined = Array.isArray(args) && args.length > 0;

        if (argsAreDefined) {
            performBranchAction(args, onComplete);
        } else {
            branchByMenuAndPause(onComplete);
        }
    }

    return branch;
}

module.exports = branch;