const {returnJsonResponse} = require('../helpers/httpHelper');

exports.getTests = (req, res) => {
    return returnJsonResponse(res, 'data instance', 200, 'api message !')
}


