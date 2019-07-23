function commitCliOptions() {
    return [
        {
            name: 'by-filename',
            type: Boolean,
            defaultOption: false
        }
    ];
}

module.exports = commitCliOptions;