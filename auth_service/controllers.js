const User=require('./models');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

exports.registerUser=async(req,res) => {
  const {name,email,password,role} = req.body;
  const HashedPassword=await bcrypt.hash(password,10);
  
  try{

    //validate user input
    if(!name || !email || !password){
      return res.status(400).json({message:'All fields are required'})
    }

    if(!['user','admin'].includes(role)){
      return res.status(400).json({message:'Invalid role'})
    }
    
    const user=new User({
      name:name,
      email:email,
      password:HashedPassword,
      role:role
    })

    user.save()
    res.status(201).json({message:'User registered successfully'})
  } 
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error registering user'})
  }
}


exports.loginUser= async(req,res) => {
  const {email,password} = req.body;  
  try{
    //validate user input
    if(!email || !password){
      return res.status(400).json({message:'Email and password are required'})
    } 

    const user=await User.findOne({
      email:email
    })

    if(!user){
      return res.status(404).json({message:'User not found'})
    }

    const isPassword=await bcrypt.compare(password,user.password);
    if(!isPassword){
      return res.status(401).json({message:'Invalid password'})
    }

    const jwtToken=jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET ,{expiresIn:'1week'})
    res.status(200).json({message:'Login successful',token:jwtToken})
    
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error logging in user'})
  }
}

exports.validateToken= (req,res) => {
  const token=req.headers.authorization?.split(' ')[1];
  if(!token){
    return res.status(401).json({message:'Token is required'})
  }
  try{  
    const decoded=jwt.verify(token,process.env.JWT_SECRET);
    res.status(200).json({message:'Token is valid',user:decoded})
  }
  catch(err){
    res.status(401).json({message:'Invalid token'})
  }
}