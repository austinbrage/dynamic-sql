# Dynamic SQL
![Node](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

#### **Node package created for the development process when working with SQL Databases inside node applications**

## **1. Instalation and usage**

- ***Install the package as a development dependency***
```bash
    npm install -D dynamic-sql@latest
```
  > **Then you generate the JAVASCRIPT queries with the command**
  > ```bash
  >     npx add-queries
  > ```
  > **Or you generate the TYPESCRIPT queries with the command**
  > ```bash
  >     npx add-queries-ts
  > ```
  > **Or you generate the TYPESCRIPT queries on all sql folders with the command**
  > ```bash
  >     npx add-queries-brage
  > ```
- ***Also you can install the package globaly***
```bash
    npm install -g dynamic-sql@latest
```
  > **So you can use the same commands without npx for a faster response**
  > ```bash
  >     add-queries
  > ```
  > ```bash
  >     add-queries-ts
  > ```
  > ```bash
  >     add-queries-brage
  > ```

## **2. How do I use it?**

- ***Add the sql files inside ./src/sql directory***

  > **The title of the query MUST be commented above the query**
  > 
  > **Between each query MUST be blank space, even after the last query**
  > ```sql
  >     -- addNew
  >         INSERT INTO `sections` (`article_id`, `content`, `image_url`)
  >         VALUES (?, ?, ?, ?);
  >     
  >     -- remove
  >         DELETE FROM `sections`
  >         WHERE `id` = ?;
  >     
  > ```
- ***Execute the commands mentioned above***

  > **When executing "add-queries" it will create a JS file inside a queries folder**
  > ```js
  >     export const sectionsQueries = {
  >       "addNew": "INSERT INTO `sections` (`article_id`, `content`, `image_url`) VALUES (?, ?, ?, ?); ",
  >       "remove": "DELETE FROM `sections` WHERE `id` = ?; "
  >     };
  > ```

  > **When executing "add-queries-ts" it will create a TS file instead with the corresponding types inside a queries folder**
  > ```ts
  >     export interface sectionsInterface {
  >       addNew: string
  >       remove: string
  >     }
  >     export const sectionsQueries: sectionsInterface = {
  >       "addNew": "INSERT INTO `sections` (`article_id`, `content`, `image_url`) VALUES (?, ?, ?, ?); ",
  >       "remove": "DELETE FROM `sections` WHERE `id` = ?; "
  >     };
  > ```
  
- ***Another option is using the brage mode***

  > **When executing "add-queries-brage" it will create a TS file inside every SQL folder that has .sql files on it**

## **3. Why should I use it?**

- ***Generally when working with SQL DBs in Node projects, we must write the sql queries as STRINGS inside the javascript or typescript files, which makes it hard to debug the queries since we cannot check their syntax inside the strings***

    > **This tool allows developers to write their SQL commands inside files with .sql extensions, which enables a better development experience since you can check the SQL syntax right away in the same document**
