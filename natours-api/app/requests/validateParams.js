const {returnJsonResponse} = require("../helpers/httpHelper");

exports.validateParams = function (requestParams) {
    return function (req, res, next) {
        for (let param of requestParams) {

            if (!checkParamPresent(Object.keys(req.body), param)) {
                return returnJsonResponse(res, null, 400, `Missing Parameter ${param.param_key}`)
            }

            let reqParam = req.body[param.param_key];
            // TODO -> check if param type match
            if (!checkParamType(reqParam, param)) {
                return returnJsonResponse(res, null, 400, `${param.param_key} is of type ` + `${typeof reqParam} but should be ${param.type}`)
            } else if (!checkParamFilled(reqParam, param)) { // TODO -> check if param filled

                return returnJsonResponse(res, null, 400, `${param.param_key} should be filled`)
            } else if ("validator_functions" in param && !runValidators(reqParam, param)) { // TODO -> check custom functions
                return returnJsonResponse(res, null, 400, `Validation failed for ${param.param_key}`)
            }
        }
        next();
    }
};

const checkParamPresent = (reqParams, paramObj) => reqParams.includes(paramObj.param_key)

const checkParamType = (reqParam, paramObj) => typeof reqParam === paramObj.type

const checkParamFilled = (reqParam, paramObj) => reqParam.trim()

const runValidators = function (reqParam, paramObj) {
    for (let validator of paramObj['validator_functions']) {
        if (!validator(reqParam)) return false;
    }
    return true;
};

