const express=require("express");
const nodemon = require("nodemon");

const {Todomodel}=require("../models/todo_model");
const todo=express.Router();
todo.get("/",async(req,res)=>{
    const todos=await Todomodel.find()
    res.send(todos)
})
todo.post("/create",async(req,res)=>{
    const todos=req.body
    try{
        const new_todo=new Todomodel(todos);
        await new_todo.save()
        res.send({"msg":"todo created successfully"})
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})
todo.patch("/update/:todoID",async(req,res)=>{
    const todoID=req.params.todoID
    const userID=req.body.userID
    const todo=await Todomodel.findOne({_id:todoID})
    if(userID!==todo.userID){
        res.send("not authorised")
    }
    else{
        await Todomodel.findByIdAndUpdate({_id:todoID},todos)
        res.send({"msg":"Todo updated sucessfully"})

    }
})
todo.delete("/delete/:todoID",async(req,res)=>{
    const todoID = req.params.todoID
    const userID=req.body.userID
    const todo=await Todomodel.findOne({_id:todoID})
    if(userID !==todo.userID){
        res.send("not authorised")
    }
    else{
        await Todomodel.findByIdAndDelete({_id:todoID})
        res.send("deleted sucessfully   ")
    }
})
module.exports={
    todo
}