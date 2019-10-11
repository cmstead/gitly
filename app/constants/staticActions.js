function staticActions(
    clear
) {
    return {
        exit: function () {
            clear();

            console.log('Thanks for using Gitly, see you next time!');
            process.exit(0);
        },
        doNothing: function () {}
    };
}

module.exports = staticActions;