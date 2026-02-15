const Product=require('./models');
exports.createProduct= async(req,res) => {
  const {name,description,price}=req.body;
  const userId=req.user.id;
  try{
    //validate user input
    if(!name || !description || !price){
      return res.status(400).json({message:'All fields are required'})
    } 
    const product=new Product({
      name:name,
      description:description,
      price:price,
      createdBy:userId
    })
    product.save()
    res.status(201).json({message:'Product created successfully'}) 
    
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error creating product'})
  }
}


exports.getProducts= async(req,res) => {
  try{
    const products=await Product.find();
    res.status(200).json({products:products})
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error fetching products'})
  }
}

exports.getProductById= async(req,res) => {
  const productId=req.params.id;    
  try{
    const product=await Product.findById(productId);
    if(!product){
      return res.status(404).json({message:'Product not found'})
    } 
    res.status(200).json({product:product})
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error fetching product'})
  }
}

exports.updateProduct= async(req,res) => {      
  const productId=req.params.id;
  const {name,description,price}=req.body;
  const userId=req.user.id;
  try{
    const product=await Product.findById(productId);
    if(!product){
      return res.status(404).json({message:'Product not found'})
    }   

    if(product.createdBy.toString() !== userId){
      return res.status(403).json({message:'Unauthorized to update this product'})
    } 
    product.name=name || product.name;
    product.description=description || product.description;
    product.price=price || product.price;
    product.save()
    res.status(200).json({message:'Product updated successfully'})
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error updating product'})
  }
}

exports.deleteProduct= async(req,res) => {      
  const productId=req.params.id;  
  const userId=req.user.id;
  try{
    const product=await Product.findById(productId);
    if(!product){
      return res.status(404).json({message:'Product not found'})
    }
    if(product.createdBy.toString() !== userId){
      return res.status(403).json({message:'Unauthorized to delete this product'})
    } 
    await Product.findByIdAndDelete(productId);
    res.status(200).json({message:'Product deleted successfully'})
  }
  catch(err){
    console.log(err.message);
    res.status(500).json({message:'Error deleting product'})
  }
}

