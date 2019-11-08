function commandDictionary() {
    return {
        'Save your changes to git': 'commit',
        'Get latest changes from remote': 'pull',
        'Upload latest changes to remote': 'push',
        'Temporarily save/retrieve changes': 'stash',
        'Show save status of edited files': 'status',
        'Copy an existing repo online': 'clone'
    };
}

module.exports = commandDictionary;