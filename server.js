require ("dotenv").config();
const express=require('express');
const app=express();
const cors=require('cors');
require('./db/connection');
const studentRouter=require('./routes/studentRouter')
const programRouter=require('./routes/programRouter')
const enrollRouter=require('./routes/enrollRouter')
const PORT=process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.use('/student',studentRouter)
app.use('/program',programRouter)
app.use('/enroll',enrollRouter)
app.listen(PORT,()=>{
    console.log(`server start at port no ${PORT}`);
});