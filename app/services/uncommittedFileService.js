function uncommittedFileService(
    statusBuilder
) {

    function getUncommittedFileRecords() {
        const statusOptions = {
            short: true,
            showCommand: false
        };

        const uncommittedFiles = statusBuilder.build(statusOptions)();

        return uncommittedFiles
            .split(/(\r\n|\r|\n)/ig)
            .map(function (fileLine) {
                const trimmedLine = fileLine.trim();

                return [
                    trimmedLine.slice(0, 3).split(''),
                    trimmedLine.slice(3)
                ]
            });
    }

    function getUncommittedFiles() {
        return getUncommittedFileRecords()
            .map(fileRecord => fileRecord[1]);

    }

    function getUnstagedFiles() {
        const statusPattern = /[M\?]/;

        return getUncommittedFileRecords()
            .filter(fileRecord => statusPattern.test(fileRecord[0][1]))
            .map(fileRecord => fileRecord[1]);

    }

    return {
        getUncommittedFiles,
        getUnstagedFiles
    }
}

module.exports = uncommittedFileService;