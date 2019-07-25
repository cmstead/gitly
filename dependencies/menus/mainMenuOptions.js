function mainMenuOptions(commandDictionary) {
    function buildChoices() {
        return Object
            .keys(commandDictionary)
            .map(function(key) {
                return `${key} (${commandDictionary[key]})`;
            });
    }

    return [
        {
            name: 'command',
            message: 'What would you like to do',
            type: 'list',
            choices: buildChoices().concat('Exit')
        }
    ];
}

module.exports = mainMenuOptions;
