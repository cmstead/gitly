function commit(
    addBuilder,
    commitMessageOptions,
    commitBuilder,
    inquirer
) {

    function commitFiles(args) {
        addBuilder.build({ addAll: true })();
        commitBuilder.build(args)();
    }

    function getCommitMessage() {
        return inquirer.prompt(commitMessageOptions);
    }

    function commit(args) {
        if (args === undefined || args.length === 0) {

            getCommitMessage()
                .then(function ({ commitTitle }) {
                    commitFiles({
                        message: commitTitle
                    });
                });

        } else {

            commitFiles({
                message: args[0]
            });

        }
    }

    return commit;
}

module.exports = commit;