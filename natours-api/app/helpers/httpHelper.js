exports.returnJsonResponse = (res, data, status = 200, message = '') => {
    res.status(status).json({
        message,
        status,
        data,
    })
}


