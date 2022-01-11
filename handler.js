'use strict';

  module.exports.hello = async (event) => {
    
   try {
          const mysql = require('mysql');
          const connnection = mysql.createConnection({
            host: "database-1.cpz8klkkh2jk.sa-east-1.rds.amazonaws.com",
            user: "admin",
            password: "12341234",
            database: "customers"
          });
          const p = new Promise((resolve) => {
            connnection.query("select * from customers", 
            function(err, results){
              if(err){ console.log(err); }
              resolve(results);
            })
          });
          const result = await p;
            return { 
              statusCode: 200,
              body: JSON.stringify({results: result})
            }     
        }
    catch(e){
      console.log(e)
    }  
};
