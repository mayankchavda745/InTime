const initOptions={};
const pgp=require('pg-promise')(initOptions);
const connection='postgres://postgres:29082000@localhost:5432/InTime';
const db=pgp(connection);


module.exports=db;