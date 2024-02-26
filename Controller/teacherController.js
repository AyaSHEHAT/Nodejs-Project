const Teacher=require("../Model/schemaTeachers");
const classes=require("../Model/schemaClasses");
const path=require('path');
exports.getAllteachers=(req,res,next)=>{
    //connect schema -> DB
    Teacher.find({})
        .then((data) => {
            res.status(200).json(data);
        })

}

exports.insertTeacher=(req,res,next)=>{
    const {firstname,lastname,password,email}    = new Teacher(req.body);
    const file=req;
    const teacher=new Teacher ({
        fullname:{
            firstname:firstname,
            lastname:lastname
        },
       
       password:password,
       email:email,
       image:(file && file.path)||null
    }

    )
       teacher.save()
        .then((data) => {
            res.status(201).json({
                message: "added"
            });
        })
        .catch(error => next(error))
}

exports.updateTeacher=(req,res,next)=>{
    try {
        const updatedTeacher = Teacher.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedTeacher) {
            throw new Error("Teacher not found");
        }
        res.status(200).json({data:"update"});
        return updatedTeacher;
    } catch (error) {
        throw error;
           }

}

exports.deleteTeacher=(req,res,next)=>{
    Teacher.findOne({
        _id: req.params.id
    })
    .then(data => {
        if (!data)
            throw new Error("id doesn't Exists");

        res.status(200).json(data,{message:`id= ${req.params.id} deleted`});

    })
    .catch(error => next(error))
}
exports.getTeacherById=(req,res,next)=>{
    Teacher.findOne({
        _id: req.params.id
    })
    .then(data => {
        if (!data)
            throw new Error("id doesn't Exists");

        res.status(200).json(data);

    })
    .catch(error => next(error))
}
exports.getAllSupervisor=(req,res,next)=>{
    classes.findOne({         //finding  supervisor of the classes by using teacherId from request parameter
        teachers:req.params.id
    })
    .then(data=>{
        if(!data)
            throw new Error("he is not supervisor in any class");

        res.status(200).json(data);
    })
    .catch(error => next(error))

}