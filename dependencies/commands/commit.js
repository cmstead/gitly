function commit(
    addBuilder,
    cliParser,
    commitCliOptions,
    commitMessageOptions,
    commitBuilder,
    inquirer
) {

    function commitFiles(args) {
        addBuilder.build({ addAll: true })();
        commitBuilder.build(args)();
    }

    function getCommitMessage() {
        console.log('\n');
        return inquirer.prompt(commitMessageOptions);
    }

    function commit(args) {
        const parsedCommitData = cliParser
            .parseSecondaryCommands(
                commitCliOptions,
                args
            );

        console.log(parsedCommitData);
        if (args === undefined || args.length === 0) {

            getCommitMessage()
                .then(function ({ commitTitle }) {
                    commitFiles({
                        message: commitTitle
                    });
                });

        } else {

            commitFiles({
                message: parsedCommitData._unknown[0]
            });

        }
    }

    return commit;
}

module.exports = commit;