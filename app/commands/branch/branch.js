function branch(
    addBranch,
    branchConstants,
    branchCliOptions,
    branchMenus,
    checkoutBranch,
    cliParser,
    showBranchList,
    staticActions
) {

    function performBranchAction(args) {
        const parsedBranchData = cliParser
            .parseSecondaryCommands(
                branchCliOptions,
                args
            );

        if (parsedBranchData.add) {
            checkoutBranch.checkoutBranch(parsedBranchData._unknown[0]);
        } else if (parsedBranchData.list) {
            showBranchList.listBranches(Object.keys(parsedBranchData));
        } else if (parsedBranchData.checkout) {
            checkoutBranch.checkoutBranch(parsedBranchData._unknown[0]);
        }
    }

    function commitByMenu(_, onComplete) {
        branchMenus
            .showMainBranchMenu()
            .then(function (data) {
                const branchArgs = [];
                const subcommand = branchConstants[data.subcommand];

                branchArgs.push(`--${subcommand}`);

                performBranchAction(branchArgs);
                
                console.log('');

                onComplete();
            });
    }

    function branch(args, onComplete = staticActions.doNothing) {
        const argsAreDefined = Array.isArray(args) && args.length > 0;

        if (argsAreDefined) {
            performBranchAction(args);
        } else {
            commitByMenu(null, onComplete);
        }
    }

    return branch;
}

module.exports = branch;