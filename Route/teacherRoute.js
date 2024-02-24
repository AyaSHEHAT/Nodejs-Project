const express=require("express");
const controller=require("./../Controller/teacherController");
const router= express.Router();


router.route("/teachers")
        .get(controller.getAllteachers)
        .post(controller.insertTeacher)
        .patch(controller.updateTeacher)
        .delete(controller.deleteTeacher)

router.get("/teachers/:id",controller.getTeacherById);
router.get("/teachers/supervisor",controller.getAllSupervisor);


module.exports=router;


