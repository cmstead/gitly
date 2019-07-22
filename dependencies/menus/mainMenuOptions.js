function mainMenuOptions(commandDictionary) {
    return [
        {
            name: 'command',
            message: 'What would you like to do',
            type: 'list',
            choices: Object.keys(commandDictionary)
        }
    ];
}

module.exports = mainMenuOptions;
