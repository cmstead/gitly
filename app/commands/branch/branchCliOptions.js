function branchCliOptions () {
    
    return [
        {
            name: 'list',
            type: Boolean
        },
        {
            name: 'checkout',
            type: Boolean
        },
        {
            name: 'add',
            type: Boolean
        },
        {
            name: 'delete',
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
        },
        {
            name: 'current',
            alias: 'c',
            type: Boolean
        }
    ];
}

module.exports = branchCliOptions;