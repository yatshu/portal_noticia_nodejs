const { Client } = require('pg');

var connPostgres = function(){
    
    return new Client({
        user: 'postgres',
        host: 'localhost',
        database: 'portal_noticias',
        password: '123456',
        port: 5432,
    });
}

module.exports = function(){ 
   return connPostgres;
}
