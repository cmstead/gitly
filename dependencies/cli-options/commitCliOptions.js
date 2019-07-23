function commitCliOptions() {
    return [
        {
            name: 'by-differences',
            type: Boolean,
            defaultOption: false
        }
    ];
}

module.exports = commitCliOptions;