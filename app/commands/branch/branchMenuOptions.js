function branchMenuOptions(
    branchConstants,
    inquirer
) {

    const mainMenuOptions = Object
        .keys(branchConstants)
        .map(option =>
            option === 'separator'
                ? new inquirer.Separator()
                : option);

    const mainBranchOptions = [
        {
            name: 'subcommand',
            message: 'What branch action do you want to take?',
            type: 'list',
            choices: mainMenuOptions
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

    const mergeOptions = [
        {
            name: 'branchName',
            message: 'Which branch you want to merge?',
            type: 'list',
            choices: []
        }
    ];

    const continueBranchWork = [
        {
            name: 'continueBranchWork',
            message: 'Continue working on branches?',
            type: 'confirm'
        }
    ];

    return {
        addOptions,
        checkoutOptions,
        continueBranchWork,
        deleteOptions,
        mainBranchOptions,
        mergeOptions
    };
}

module.exports = branchMenuOptions;