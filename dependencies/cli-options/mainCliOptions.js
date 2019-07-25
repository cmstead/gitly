function mainCliOptions() {
    return [
        {
            name: 'commit',
            default: true
        },
        {
            name: 'pull',
            default: true
        }
    ];
}

module.exports = mainCliOptions;