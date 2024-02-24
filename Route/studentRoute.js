const express=require("express");
const controller=require("./../Controller/studentController");
const router= express.Router();
// const {isAdmin,isTeacher}=require("./../Middleware/Autherozation");


router.route("/students")
        .get(controller.getAllstudents)
        .post(controller.insertStudent)
        .patch(controller.updateStudent)
        .delete(controller.deleteStudent)

router.get("/students/:id",controller.getStudentById);

module.exports=router;

