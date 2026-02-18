const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();
const authRoutes=require('./routes');
const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection error:', err.message));

app.use('/auth',authRoutes);

app.listen(process.env.PORT_AUTH,() => {
  console.log('Auth service is running on port ',process.env.PORT_AUTH);
});