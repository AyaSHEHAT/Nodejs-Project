const mongoose=require("mongoose");

const schema=new mongoose.Schema({
    _id:Number,
    name:{
        type: String,
        required: true
    },
    teachers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'teachers'
      },
    students: [
        {
          type: Number,
          ref: 'students'
        }
    ],
});
module.exports=mongoose.model("classes",schema);