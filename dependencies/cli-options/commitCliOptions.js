function commitCliOptions() {
    return [
        {
            name: 'by-filename',
            type: Boolean
        },
        {
            name: 'by-file-difference',
            type: Boolean
        }
    ];
}

module.exports = commitCliOptions;