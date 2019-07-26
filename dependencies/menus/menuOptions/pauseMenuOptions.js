function pauseMenuOptions() {
    return [
        {
            name: 'returnOrExit',
            message: 'What would you like to do',
            type: 'list',
            choices: ['Return to main menu', 'Exit']
        }
    ];
}

module.exports = pauseMenuOptions;
