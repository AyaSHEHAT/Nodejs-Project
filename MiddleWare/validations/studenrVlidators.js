const {body,param,query}=require("express-validator");
exports.insertArray=[
    body("_id").isInt().withMessage("id should be int..."),
    body("name").isString().withMessage("student name should be string")
]


