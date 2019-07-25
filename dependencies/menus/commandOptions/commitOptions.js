function commitOptions() {
    return [
        {
            name: 'commitTitle',
            message: 'What are you committing? (50 chars or less):\n',
            validate: function(message) {
                return message.length > 0 && message.length <= 50;
            }
        },
        {
            name: 'commitSelected',
            message: 'Commit:',
            type: 'list',
            choices: [
                'All files',
                'Selected files',
                'Files by file difference (Advanced)'
            ]
        }
    ];
}

module.exports = commitOptions;