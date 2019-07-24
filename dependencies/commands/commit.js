function commit(
    addBuilder,
    cliParser,
    commitCliOptions,
    commitOptions,
    commitBuilder,
    inquirer,
    statusBuilder,
    uncommittedFileSelect
) {

    function getAllUncommittedFiles() {
        const statusOptions = {
            short: true,
            showCommand: false
        };

        const uncommittedFiles = statusBuilder.build(statusOptions)();

        return uncommittedFiles
            .split(/(\r\n|\r|\n)/ig)
            .map(filePath => filePath.slice(3))
            .filter(filePath => filePath !== '');
    }

    function addSelectedFiles() {
        const uncommittedFiles = getAllUncommittedFiles();

        uncommittedFileSelect[0].choices = uncommittedFiles;

        return inquirer
            .prompt(uncommittedFileSelect)
            .then(function (data) {
                addBuilder.build({ files: data.selectedFiles })();
            });
    }

    function addAllFiles() {
        addBuilder.build({ addAll: true })();

        return Promise.resolve(true);
    }

    function commitFiles(args) {
        const addFileAction = args.fileAddMethod !== 'Selected files'
            ? addAllFiles
            : addSelectedFiles;

        addFileAction()
            .then(function () {
                commitBuilder.build(args)();
            })
            .catch(function(error) {
                console.log('Unable to complete commit:', error.message)
            });
    }

    function getCommitOptions() {
        console.log('\n');
        return inquirer.prompt(commitOptions);
    }

    function commitByMenu(_, onComplete) {
        getCommitOptions()
            .then(function (data) {
                commitFiles({
                    message: data.commitTitle,
                    fileAddMethod: data.commitSelected
                });
            })
            .catch(function (error) {
                console.log('An error occurred while committing your files: ', error.message);
                onComplete();
            });
    }

    function commitDirectly(args) {
        const parsedCommitData = cliParser
            .parseSecondaryCommands(
                commitCliOptions,
                args
            );

        commitFiles({
            message: parsedCommitData._unknown[0]
        });
    }

    function commit(args, onComplete = () => null) {
        const argsAreSet = args !== undefined && args.length > 0;
        const commitMethod = argsAreSet ? commitDirectly : commitByMenu;

        commitMethod(args, onComplete);
    }

    return commit;
}

module.exports = commit;