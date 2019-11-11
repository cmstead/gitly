function branchMenuOptions (
    branchConstants
) {
    
    const mainBranchOptions = [
        {
            name: 'subcommand',
            message: 'What branch action do you want to take?',
            type: 'list',
            choices: Object.keys(branchConstants)
        }
    ];

    const checkoutOptions = [
        {
            name: 'branchName',
            message: 'Which branch do you want to check out?'
        }
    ];

    const addOptions = [
        {
            name: 'branchName',
            message: 'What is the name of the branch you want to create?'
        }
    ];

    return {
        addOptions,
        checkoutOptions,
        mainBranchOptions
    };
}

module.exports = branchMenuOptions;