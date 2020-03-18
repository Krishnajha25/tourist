const pool = require('../../database/database')

module.exports = {
    create: (data, callback) => {
        pool.query(
            `insert into users(first_name, last_name, phone, email, password, gender, created) values(?, ?, ?, ?, ?, ?, ? )`,
            [
                data.first_name,
                data.last_name,
                data.phone,
                data.email,
                data.password,
                data.gender,
                data.created
            ],
            (error, results, fields) => {
                if (error){
                    return callback(error)
                }
                return callback(null, results)
            }
        )
    }
}