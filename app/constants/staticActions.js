function staticActions(
    clear,
    versionService
) {
    return {
        exit: function () {
            clear();

            console.log('Thanks for using Gitly, see you next time!');

            versionService.showUpdateMessageIfOutOfDate();
            process.exit(0);
        },
        doNothing: function () {}
    };
}

module.exports = staticActions;