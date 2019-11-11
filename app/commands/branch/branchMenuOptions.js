function branchMenuOptions (
    branchConstants
) {
    
    const mainBranchOptions = [
        {
            name: 'subcommand',
            type: 'list',
            choices: Object.keys(branchConstants)
        }
    ];

    return {
        mainBranchOptions
    };
}

module.exports = branchMenuOptions;