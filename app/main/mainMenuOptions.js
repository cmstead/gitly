function mainMenuOptions(
    commandDictionary,
    inquirer
) {
    function buildChoices() {
        return Object
            .keys(commandDictionary)
            .map(function (key) {
                if (commandDictionary[key] === 'separator') {
                    return new inquirer.Separator();
                } else if (key.trim() !== ''
                    && key.toLowerCase() !== 'exit') {
                    return `${key} (${commandDictionary[key]})`;
                } else {
                    return key;
                }
            });
    }

    return [
        {
            name: 'command',
            message: 'What would you like to do',
            type: 'list',
            choices: buildChoices()
        }
    ];
}

module.exports = mainMenuOptions;
