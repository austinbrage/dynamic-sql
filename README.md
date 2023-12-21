# Dynamic SQL
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

#### **Node package created for the development process when working with SQL Databases inside node applications**

## **1. Instalation**

- ***Install the package as a development dependency***
```bash
    npm install -D dynamic-sql@latest
```

## **2. Setup**

- ***Add the scripts to generate the JS objects with the SQL queries***
```js
    "scripts": {
        "add-queries": "node node_modules/dynamic-sql/src/index",
        "add-queries:ts": "node node_modules/dynamic-sql/src/index_types"
    },
```

## **3. How do I use it?**

- ***Add the sql files inside ./src/sql directory***

> **The title of the query MUST be commented above the query**
> 
> **Between each query MUST be blank space, even after the last query**
```sql
    -- addNew
        INSERT INTO `sections` (`article_id`, `content`, `image_url`)
        VALUES (?, ?, ?, ?);
    
    -- remove
        DELETE FROM `sections`
        WHERE `id` = ?;
    
```
- ***Execute the script added to the package-json***

> **When executing add-queries it will create a JS file inside a queries folder**
```js
    export const sectionsQueries = {
      "addNew": "INSERT INTO `sections` (`article_id`, `content`, `image_url`) VALUES (?, ?, ?, ?); ",
      "remove": "DELETE FROM `sections` WHERE `id` = ?; "
    };
```

> **When executing add-queries it will create a TS file inside a queries folder**
```ts
    export interface sectionsInterface {
      addNew: string
      remove: string
    }
    export const sectionsQueries: sectionsInterface = {
      "addNew": "INSERT INTO `sections` (`article_id`, `content`, `image_url`) VALUES (?, ?, ?, ?); ",
      "remove": "DELETE FROM `sections` WHERE `id` = ?; "
    };
```

## **3. Why should I use it?**

- ***Generally when working with SQL DBs in Node projects, we must write the sql queries as STRINGS inside the javascript or typescript files, which makes it hard to debug the queries since we cannot check their syntax inside the strings***

    > **This tool allows developers to write their SQL commands inside files with .sql extensions, which enables a better development experience since you can check the SQL syntax right away in the same document**