const generateTypeDefinition = (tableName, queries) => {
    return  `export const ${tableName}Queries = ${JSON.stringify(queries, null, 2)};\n`;
};

module.exports = generateTypeDefinition;