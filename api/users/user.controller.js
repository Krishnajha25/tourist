const { create } = require('./user.service')

const { genSaltSync, hashSync } = require('bcrypt')

module.exports = {
    createUser: (req, res) =>{
        const body = req.body
        const salt = genSaltSync(10)
        body.password = hashSync('1234', salt)
        create(body, (err, results) => {
            if(err){
                console.log(err)
                return res.status(500).json({
                    status: 0,
                    message: 'Database conection error'
                })
            }
            return res.status(200).json({
                status: 1,
                data: results
            })
        })
    }
}