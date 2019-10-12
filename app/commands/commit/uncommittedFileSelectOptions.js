function uncommittedFileSelectOptions(
    uncommittedFileService
) {

    return function () {
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
}

module.exports = uncommittedFileSelectOptions;