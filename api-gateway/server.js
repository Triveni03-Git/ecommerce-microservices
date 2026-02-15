require('dotenv').config({path:"../.env"})
const express = require("express");

const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const app=express()
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
const {createProxyMiddleware} = require("http-proxy-middleware")
const cors=require('cors')


app.use(cors())
app.use(express.json())


app.use('/auth',createProxyMiddleware({
  target:"http://localhost:5001",
  changeOrigin:true
}))

app.use('/products',createProxyMiddleware({
  target:"http://localhost:5002",
  changeOrigin:true
}))

app.listen(process.env.PORT_GATEWAY,()=> console.log( `gateway running on ${process.env.PORT_GATEWAY}`))