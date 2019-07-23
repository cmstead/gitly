function uncommittedFileSelect() {
    return [
        {
            name: 'selectedFiles',
            message: 'Select uncommitted files:\n',
            type: 'checkbox'
        }
    ];
}

module.exports = uncommittedFileSelect;