function branchCliOptions () {
    
    return [
        {
            name: 'list',
            type: Boolean
        },
        {
            name: 'all',
            alias: 'a',
            type: Boolean
        },
        {
            name: 'remote',
            alias: 'r',
            type: Boolean
        }
    ];
}

module.exports = branchCliOptions;