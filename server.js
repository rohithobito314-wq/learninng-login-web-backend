const express=require('express');
const cors=require('cors');
const fs=require('fs');
const path=require('path');
const app=express();
app.use(cors());
app.use(express.json());
app.post('/login',(req,res)=>{
 const users=JSON.parse(fs.readFileSync(path.join(__dirname,'users.json')));
 const {username,password}=req.body;
 const user=users.find(u=>u.username===username);
 if(!user) return res.json({message:'Username not found'});
 if(user.password!==password) return res.json({message:'Invalid password'});
 return res.json({message:'Welcome Rohith!'});
});
app.listen(3000,()=>console.log('Server running on port 3000'));