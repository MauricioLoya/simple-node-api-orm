## simple-node-api-mysql
> instalation

`$ git clone https://github.com/MauricioLoya/simple-node-api-mysql.git`

`$ npm i`

> Set up Proyect

if you are going to use typeORM, first set yours daba base access in the file `/ormconfig.json`.

*note: You must create the dabata base after run that protect.*

if you are **not** going to use typeORM just comment the line **54** in the file `/src/Server.ts`.

`createConnection = async () => {`

`  // await createConnection();`

`}`




> Run proyect

`$ npm run dev`


