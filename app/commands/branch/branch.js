function branch(
    addBranch,
    branchCliOptions,
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

        console.log(Object.keys(parsedBranchData));

        if (parsedBranchData.list) {
            showBranchList.listBranches(Object.keys(parsedBranchData));
        }
    }

    function branch(args, onComplete = staticActions.doNothing) {
        const argsAreDefined = Array.isArray(args) && args.length > 0;

        if (argsAreDefined) {
            performBranchAction(args);
        } else {
            onComplete();
        }
    }

    return branch;
}

module.exports = branch;