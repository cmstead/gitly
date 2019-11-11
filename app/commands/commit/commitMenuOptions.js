function commitMenuOptions() {
    return [
        {
            name: 'commitTitle',
            message: 'What are you committing? (90 chars or less):\n'
        },
        {
            name: 'commitSelected',
            message: 'Choose method to save (commit) files:',
            type: 'list',
            choices: [
                'All files (default behavior)',
                'Selected files (--by-filename)',
                'Files by file difference (--by-file-difference) [Advanced]'
            ]
        }
    ];
}

module.exports = commitMenuOptions;