const express=require("express");
const {connection}=require("./config/db")
const {user}=require("./routes/auth_router")
const {todo}=require("./routes/todo_router")
const cors=require("cors")
const {authenticate}=require("./middleware/authentication")
const app=express();
app.get("/",(req,res)=>{
    res.send ("welcome")
})

app.use(express.json());
app.use(cors({
    origin:"*"
}))

app.use("/users",user)
app.use(authenticate)
app.use("/todos",todo)

app.listen(8080,async()=>{
    try{
        await connection
    }catch(err){
        console.log(err)
    }
    console.log("Port 8080 listening")
})