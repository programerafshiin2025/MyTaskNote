import express from "express";
import mangoose from "mongoose";
import Task from "./Models/modeltask.js";
const app=express()
app.use(express.json())
const port=5555;

app.get('/', async(req,res)=>{
          const Notelist= await Task.find()
          res.json(Notelist)

})

app.post('/', async(req,res)=>{
          const {title, data, finished}=req.body;
          const NewTask=new Task({
                    title,data,finished
          });
          const Note=await NewTask.save();
          res.json(Note)

})

app.put('/:id', async(req,res)=>{
          const {title, data, finished}=req.body;
          const Note=await Task.findById(req.params.id)

         if(Note){
          Note.title=title
          Note.data=data
          Note.finished=finished
          const upadtedTask=await Note.save();
          res.json(upadtedTask)
         }

})

app.delete('/:id', async(req,res)=>{
          const Note=await Task.findByIdAndDelete(req.params.id)
          res.json({message:"Task Deleted "})

})

app.listen(port, ()=>{
          console.log(`server is runing at this moments${port}`);
})
mangoose.connect("mongodb+srv://khayrexasan69:khayrexasan69@mobillapp.faymvbr.mongodb.net/MyTaskNote?retryWrites=true&w=majority&appName=MobillApp").then(()=>{
          console.log("Connected to the Database");
})
