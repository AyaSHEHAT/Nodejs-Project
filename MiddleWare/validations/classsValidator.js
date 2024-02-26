const {
    body,
    param,
    query
} = require("express-validator");
exports.insertArray = [body("id").isInt().withMessage("class id must be number"), body("name").isAlpha().withMessage("the name of class must be string").isLength({
    max: 10
}).withMessage("class name is less than or equal 10 letters")]