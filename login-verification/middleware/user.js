const { StatusCodes } = require("http-status-codes")
const User = require('../model/user')

const userRoleValidate = async (req, res, next) =>{
    try {

        let id = req.userID

        // check if user id exists or not
        let exUser = await User.findById(id)
        if(!exuser)
            return res.status(StatusCodes.NTP_FOUND).json({status: true , msg : `requsted user id not found`})

        //check if role is admin or not
        if (exUser)
            return res.status(StatusCodes.UNAUTHORIZED).json({ status:false, msg:`Access denied for non admin users.. ` })

        next()

    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERRORL).json({ status:false, msg: err.message})
    }
} 