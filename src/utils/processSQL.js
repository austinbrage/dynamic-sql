const { readFileSync } = require('fs');

const processSQLFile = (filePath) => {
    const fileText = readFileSync(filePath, 'utf8');
    const lines = fileText.split('\n');

    const data = {};
    let currentQuery = '';
    let currentComment = '';

    for (const line of lines) {
        const cleanLine = line.trim();

        if (cleanLine.startsWith('--')) {
            currentComment = cleanLine.slice(2).trim();
        } else if (cleanLine !== '') {
            if (currentComment !== '') currentQuery += cleanLine + ' ';
        } else if (currentComment !== '' && currentQuery.trim() !== '') {
            data[currentComment] = currentQuery;
            currentComment = '';
            currentQuery = '';
        }
    }

    return data;
};

module.exports = processSQLFile;