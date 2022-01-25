const mysql = require('mysql');
const connStrParser = require("connection-string-parser");

module.exports = {
    select: function (query) {
        return new Promise((resolve, reject) => {
            const connection = getConnection();
            connection.connect();
            connection.query(query, function(err, rows) {
                if (err) 
                    reject(err);
                else 
                    resolve(rows);
            });
            connection.end();
        });
    }
};

const getConnectionDetails = function () {
  const parser = new connStrParser.ConnectionStringParser({
    scheme: "mysql",
    hosts: []
  });
  return parser.parse(process.env.CLEARDB_DATABASE_URL);
};

const getConnection = function () {
  const connDetails = getConnectionDetails();

  return mysql.createConnection({
    host: connDetails['hosts'][0]['host'],
    port: connDetails['hosts'][0]['port'],
    user: connDetails['username'],
    password: connDetails['password'],
    database: connDetails['endpoint']
  });
};

