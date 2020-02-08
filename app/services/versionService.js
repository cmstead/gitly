function versionService(
    child_process
) {
    let currentVersion;
    let remoteVersion;

    function getCurrentVersion() {
        if(!currentVersion) {
            currentVersion = require(__dirname + '/../../package.json').version.trim();
        }

        return currentVersion;
    }

    function getRemoteVersion() {
        if(!remoteVersion) {
            remoteVersion = child_process.execSync(
                'npm view @cmstead/gitly version',
                {encoding: 'utf8'}
            ).trim();
        }

        return remoteVersion;
    }

    function isLatestVersion() {
        const remoteVersion = getRemoteVersion();
        const currentVersion = getCurrentVersion();

        return remoteVersion === currentVersion;
    }

    function showUpdateMessage() {
        console.log(`
*************
Your version of gitly is out of date:

Your version: ${getCurrentVersion()}
Available version: ${getRemoteVersion()}

To install the latest version, run the following:

npm install @cmstead/gitly@latest -g
*************
        `);
    }

    function showUpdateMessageIfOutOfDate() {
        if (!isLatestVersion()) {
            showUpdateMessage();
        }
    }

    return {
        showUpdateMessageIfOutOfDate
    };
}

module.exports = versionService;