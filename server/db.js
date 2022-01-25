const dbImpl = require("./dbimpl");

module.exports = {
    getUsers: function () {
        return dbImpl.select("SELECT id, first_name, last_name FROM user")
    }
};
