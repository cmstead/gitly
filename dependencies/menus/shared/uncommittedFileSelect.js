function uncommittedFileSelect(
    uncommittedFileService
) {

    const unstagedFiles = uncommittedFileService.getUnstagedFiles();

    return [
        {
            name: 'selectedFiles',
            message: 'Select uncommitted files:\n',
            type: 'checkbox',
            choices: unstagedFiles
        }
    ];
}

module.exports = uncommittedFileSelect;