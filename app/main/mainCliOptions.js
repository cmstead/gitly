function mainCliOptions() {
    return [
        {
            name: 'branch',
            default: true
        },
        {
            name: 'commit',
            default: true
        },
        {
            name: 'pull',
            default: true
        },
        {
            name: 'push',
            default: true
        },
        // {
        //     name: 'stash',
        //     default: true
        // },
        {
            name: 'status',
            default: true
        },
        {
            name: 'clone',
            default: true
        }
    ];
}

module.exports = mainCliOptions;