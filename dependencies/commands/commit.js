function commit(
    addBuilder,
    commitCliOptions,
    commitBuilder
) {

    function commitFiles(args) {
        addBuilder.build({})();
        commitBuilder.build(args)();
    }

    function getCommitMessage() {
        return inquirer.prompt(commitCliOptions);
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
            })
        }
    }

    return commit;
}

module.exports = commit;