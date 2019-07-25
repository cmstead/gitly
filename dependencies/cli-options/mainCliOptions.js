function mainCliOptions() {
    return [
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
        {
            name: 'status',
            default: true
        }
    ];
}

module.exports = mainCliOptions;