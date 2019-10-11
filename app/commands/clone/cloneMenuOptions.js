function cloneMenuOptions () {
    return [
        {
            name: 'cloneType',
            message: 'Clone repository from where?',
            type: 'list',
            choices: [
                'A git project URI'
            ]
        }
    ];
}

module.exports = cloneMenuOptions;