const error = (err,req,res,next)=>{
    let status = 500
    let message = "Internal Server Error"
    switch (err.name) {
        case "SequelizeValidationError":
            status = 400
            message = err.errors.map(error=>error.message)
            break;
        case "SequelizeUniqueConstraintError":
            status = 400
            message = err.errors.map(error=>error.message)
            break;
        case "NotFound":
            status = 404
            message = err.msg
            break;
        case "ErrorLogin":
            status = 400
            message = err.msg
            break;
        case "NotAuthorize":
            status = 403
            message = err.msg
            break;
        case "InvalidToken":
            status = 401
            message = err.msg
            break;
        default:
            break;
    }

    res.status(status).json({errors: message})
}

module.exports = error