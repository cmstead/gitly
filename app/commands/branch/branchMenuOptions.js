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
            message: 'Which branch do you want to check out?',
            type: 'list',
            choices: []
        }
    ];

    const addOptions = [
        {
            name: 'branchName',
            message: 'What is the name of the branch you want to create?'
        }
    ];

    const deleteOptions = [
        {
            name: 'branchName',
            message: 'Which branch you want to delete?',
            type: 'list',
            choices: []
        }
    ];

    return {
        addOptions,
        checkoutOptions,
        deleteOptions,
        mainBranchOptions
    };
}

module.exports = branchMenuOptions;