const express = require('express');
const app = express();
const cors=require('cors');
const morgan=require('morgan');
const dotenv=require('dotenv')
//configuration
dotenv.config()
//middleware=cors
app.use(cors());
app.use(express.json);
app.use(morgan('dev'));//tell us about the url
app.use('/api/vi/test',require('./routes/testRoutes'));

app.get("/",(req ,res)=>{
    return res.status(200).send("<h1>welcome</h1>");
})
const PORT=process.env.PORT||8080;
app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});