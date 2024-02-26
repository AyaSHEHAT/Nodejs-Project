const classes=require("../Model/schemaClasses");
// conct 
exports.getAllClasses=(req,res,next)=>{
    classes.find({})
    .populate({path: "teachers",select:"fullname"})
    .populate({path:"students",select:{fullname:1}})
        .then((data) => {
            console.log(classes);
            res.status(200).json(data);
        })
        .catch(error => next(error))
    
}

exports.getClassById=(req,res,next)=>{
    classes.findOne({
        _id: req.params.id
    })
    .then(data => {
        if (!data)
            throw new Error("id doesn't Exists");

        res.status(200).json(data);

    })
    .catch(error => next(error))
}

exports.insertClass=(req,res,next)=>{
    const object=new classes(req.body);
    object.save()
    .then((data)=>{
        res.status(201).json(object);
    }).catch(err=>{next(err)});

}

exports.updateClass=(req,res,next)=>{
    res.status(200).json({data:"updatedddd"});
}

exports.deleteClass=(req,res,next)=>{
    res.status(200).json({data:"deletedddd"});
}
exports.getChildren=(req,res,next)=>{
    res.status(200).json({data:{id:req.params.id,children:["aya","asmaa","nada"]}});
}
exports.getSupervisors=(req,res,next)=>{
    res.status(200).json({data:{id:req.params.id,supervisor:["teach1","teach2","teach3"]}});
}