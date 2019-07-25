function commandDictionary() {
    return {
        'Save your changes to git': 'commit',
        'Get latest changes from remote': 'pull',
        'Upload latest changes to remote': 'push',
        'Show save status of edited files': 'status'
    };
}

module.exports = commandDictionary;