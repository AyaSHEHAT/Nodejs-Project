const Teacher=require("../Model/schemaTeachers")
exports.getAllteachers=(req,res,next)=>{
    //connect schema -> DB
    Teacher.find({})
        .then((data) => {
            res.status(200).json({data:[{},{},{}]});
        })
        
    
}

exports.insertTeacher=(req,res,next)=>{
    console.log(req.query);  // get url query string
    console.log(req.params);  // get url query params
    console.log(req.body);  // post body
    res.status(201).json({data:"added"});
}

exports.updateTeacher=(req,res,next)=>{
    res.status(200).json({data:"update"});
}

exports.deleteTeacher=(req,res,next)=>{
    res.status(200).json({data:"delete"});
}
exports.getTeacherById=(req,res,next)=>{
    res.status(200).json({data:{id:req.params.id,name:'Aya'}});
}
exports.getAllSupervisor=(req,res,next)=>{
    res.status(200).json({data:{Supervisors:['Aya',"Nadia","Eman"]}});
}