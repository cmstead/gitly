function commitMessageOptions() {
    return [
        {
            name: 'commitTitle',
            message: 'What are you committing? (50 chars or less):\n',
            validate: function(message) {
                return message.length > 0 && message.length <= 50;
            }
        }
    ];
}

module.exports = commitMessageOptions;