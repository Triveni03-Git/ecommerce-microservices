const mongoose=require('mongoose');

const userSchema={
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  password:{type:String,required:true},
  role:{type:String,enum:['user','admin'],default:'user'}
}

const userModel=mongoose.Schema(userSchema);
module.exports=mongoose.model('User',userModel);
