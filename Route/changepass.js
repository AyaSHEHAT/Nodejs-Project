const express = require("express");
const controller = require("../Controller/changepassController");

const {
        body,
        query,
        param} = require("express-validator");
const router = express.Router();


router.route("/changePass")
        .get(AuthMiddleWire.isAdmin,controller.changePassword)


module.exports = router;
