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

        console.log('Committing files by filename');

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

    function chooseFileAddAction(fileAddMethod) {
        if (fileAddMethod === 'All files') {
            return addAllFiles;
        } else if (fileAddMethod === 'Selected files') {
            return addSelectedFiles;
        } else {
            return () => Promise.resolve(true);
        }
    }

    function commitFiles(args) {
        const addFileAction = chooseFileAddAction(args.fileAddMethod);

        addFileAction()
            .then(function () {
                commitBuilder.build(args)();
            })
            .catch(function (error) {
                console.log('Unable to complete commit:', error.message)
            });
    }

    function getCommitOptions() {
        console.log('\n');
        return inquirer.prompt(commitOptions);
    }

    function buildCommitOptions(data) {
        let options = {
            message: data.commitTitle,
            fileAddMethod: data.commitSelected
        };

        if (data.commitSelected === 'Files by file difference') {
            options.commitByFileDiff = true;
        }

        return options;
    }

    function commitByMenu(_, onComplete) {
        getCommitOptions()
            .then(function (data) {
                const options = buildCommitOptions(data);

                commitFiles(options);
            })
            .catch(function (error) {
                console.log('An error occurred while committing your files: ', error.message);
                onComplete();
            });
    }

    function selectFileAddMethod(parsedCommitData) {
        const byFilename = Boolean(parsedCommitData['by-filename']);
        const byFileDiff = Boolean(parsedCommitData['by-file-difference']);

        if (byFilename) {
            return 'Selected files';
        } else if (!byFileDiff) {
            return 'All files';
        } else {
            return null;
        }
    }

    function commitDirectly(args) {
        const parsedCommitData = cliParser
            .parseSecondaryCommands(
                commitCliOptions,
                args
            );

        const fileAddMethod = selectFileAddMethod(parsedCommitData);

        commitFiles({
            message: parsedCommitData._unknown[0],
            fileAddMethod: fileAddMethod,
            commitByFileDiff: parsedCommitData['by-file-difference']
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