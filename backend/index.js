import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/getData',(req,res)=>{
    res.send("hello world How are you")
})
app.listen(4000,()=>{
  console.log('server is runnning');
})