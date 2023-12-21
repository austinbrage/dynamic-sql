const generateTypeDefinition = (tableName, queries) => {
    
    const typeInterface = `interface ${tableName}Interface {\n${Object.keys(queries).map(queryName => `  ${queryName}: string`).join('\n')}\n}\n`;

    const typeDefinition = `export const ${tableName}Queries: ${tableName}Interface = ${JSON.stringify(queries, null, 2)};\n`;

    return typeInterface + typeDefinition;
};

module.exports = generateTypeDefinition;