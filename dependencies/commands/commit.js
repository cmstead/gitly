function commit(
    addBuilder,
    cliParser,
    commitCliOptions,
    commitOptions,
    commitBuilder,
    inquirer
) {

    function commitFiles(args) {
        addBuilder.build({ addAll: true })();
        commitBuilder.build(args)();
    }

    function getCommitOptions() {
        console.log('\n');
        return inquirer.prompt(commitOptions);
    }

    function commitByMenu(_) {
        getCommitOptions()
            .then(function (data) {
                commitFiles({
                    message: data.commitTitle
                });
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

    function commit(args) {
        const argsAreSet = args !== undefined && args.length > 0;
        const commitMethod = argsAreSet ? commitDirectly : commitByMenu;

        commitMethod(args);
    }

    return commit;
}

module.exports = commit;