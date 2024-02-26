const express=require("express");
const controller=require("./../Controller/teacherController");
const AuthMW=require("./../MiddleWare/AuthMW");

const router= express.Router();


router.route("/teachers")
        .get(AuthMW.isAdmin,controller.getAllteachers)
        .post(AuthMW.isAdmin,controller.insertTeacher)
        .patch(AuthMW.isAdmin,controller.updateTeacher)
        .delete(AuthMW.isAdmin,controller.deleteTeacher)

router.get("/teachers/:id",AuthMW.isTeacher,controller.getTeacherById);
router.get("/teachers/supervisor/:id", AuthMW.isAdmin,controller.getAllSupervisor);


module.exports=router;


