const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config({path:'../.env'});
const cors=require('cors');
const productRoutes=require('./routes');
const app=express();
app.use(express.json());  
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection error:', err.message));


app.use('/api',productRoutes);

app.listen(process.env.PORT_PRODUCT,() => {
  console.log('Product service is running on port ',process.env.PORT_PRODUCT);
});