#!/usr/bin/env node

const { join, extname, basename, relative } = require('path');
const processSQLFile = require('./utils/processSQL');
const generateTypeDefinition = require('./utils/generateTypes');
const { readdirSync, writeFileSync, statSync } = require('fs');

// Initialize paths references from current working directory
const currentDir = process.cwd();

function isDirectory(path) {
    return statSync(path).isDirectory();
}

function findSQLFolders(baseDir, folders = []) {
    const entries = readdirSync(baseDir);
    
    if (entries.includes('sql')) {
        const sqlFolder = relative(currentDir, join(baseDir, 'sql'));
        if (!folders.includes(sqlFolder)) {
            folders.push(sqlFolder);
        }
    }

    for (const entry of entries) {
        const entryPath = join(baseDir, entry);
        if (entry !== 'node_modules' && isDirectory(entryPath)) {
            findSQLFolders(entryPath, folders);
        }
    }
}

function generateQueries() {
    const sqlFolders = [];
    findSQLFolders(currentDir, sqlFolders);

    if (sqlFolders.length === 0) {
        return console.error('Could not find any "sql" folders in the project directory, please add them to your project');
    }

    for (const sqlFolder of sqlFolders) {
        const sqlFolderDir = join(currentDir, sqlFolder);
        const sqlFiles = readdirSync(sqlFolderDir).filter((fileName) => fileName.endsWith('.sql'));

        if (sqlFiles.length === 0) {
            console.warn(`No ".sql" files found in the "${sqlFolder}" directory`);
            continue;
        }

        for (const fileName of sqlFiles) {
            const filePath = join(sqlFolderDir, fileName);
            const fileData = processSQLFile(filePath);

            const tableName = basename(fileName, extname(fileName));
            const outputFileName = join(sqlFolderDir, `${tableName}.ts`);
            const typeDefinition = generateTypeDefinition(tableName, fileData);

            writeFileSync(outputFileName, typeDefinition, 'utf-8');
            console.log(`Query for ${tableName} in ${sqlFolder} added successfully`);
        }
    }
}

generateQueries();