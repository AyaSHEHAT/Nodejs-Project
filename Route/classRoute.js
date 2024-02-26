/**
 * @swagger
 * /class:
 *   get:
 *     description: Returns a list of classe
 *     responses:
 *       200:
 *         description: A list of class
 *         content:
 *           json:
 *             schema:
 *               type: objest of objects
 *               items:
 *                 $ref: './../Models/classSchema.json'
 *   post:
 *     description: Insert data into class
 *     responses:
 *       201:
 *         description: Inserted data in class
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 *   put:
 *     description: Update class
 *     responses:
 *       200:
 *         description: Updated class
 *         content:
 *           json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 * put:
 *     description: delete class
 *     responses:
 *       200:
 *         description: delete class
 *         content:
 *           json:
 *             schema:
 *               type: object
 *               $ref: './../Models/classSchema.json'
 */



const express = require("express");
const controller = require("../Controller/classController");
const {insertArray}=require('../MiddleWare/validations/classsValidator');
//  const {validationResult}=require('../MiddleWare/validations/validator');
 const AuthMiddleWire=require('../MiddleWare/AuthMW');
const {
        body,
        query,
        param
} = require("express-validator");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');
const router = express.Router();


router.route("/class")
        .get(AuthMiddleWire.isAdmin,controller.getAllClasses)
        .post(AuthMiddleWire.isAdmin,insertArray, controller.insertClass)
        .patch(AuthMiddleWire.isAdmin,controller.updateClass)
        .delete(AuthMiddleWire.isAdmin,controller.deleteClass)

router.get("/class/:id", controller.getClassById);
router.get("/classChildern/:id", controller.getChildren);
router.get("/classTeacher/:id", controller.getSupervisors);

module.exports = router;
