const classes=require("../Model/schemaClasses");
exports.getAllClasses=(req,res,next)=>{
    classes.find({})
        .then((data) => {
            res.status(200).json(data);
        })
        .catch(error => next(error))
    
}

exports.getClassById=(req,res,next)=>{
    res.status(200).json({data:{id:req.params.id}});
}

exports.insertClass=(req,res,next)=>{
    console.log(req.query);  // get url query string
    console.log(req.params);  // get url query params
    console.log(req.body);  // post body
    res.status(201).json({data:"addeddd"});
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