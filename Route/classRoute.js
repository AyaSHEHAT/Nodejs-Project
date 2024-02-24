const express=require("express");
const controller=require("./../Controller/classController");
const router= express.Router();


router.route("/class")
        .get(controller.getAllClasses)
        .post(controller.insertClass)
        .patch(controller.updateClass)
        .delete(controller.deleteClass)

router.get("/class/:id",controller.getClassById);
router.get("/classChildern/:id",controller.getChildren);
router.get("/classTeacher/:id",controller.getSupervisors);

module.exports=router;