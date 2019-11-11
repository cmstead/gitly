function commandDictionary() {
    return {
        'Get latest changes from remote': 'pull',
        'Upload latest changes to remote': 'push',
        'separator1': 'separator',
        'Save your changes to git': 'commit',
        'Show save status of edited files': 'status',
        'separator2': 'separator',
        'Manage and use branches': 'branch',
        'Copy an existing repo online': 'clone',
        // 'Temporarily save/retrieve changes': 'stash',
        'Exit': 'Exit',
        ' ': ' '
    };
}

module.exports = commandDictionary;