const mongoose=require('mongoose');
const todoschema=new mongoose.Schema({
    title:{type: 'string',required: true},
    content: {type: 'string',required: true},
    author: {type: 'string',required: true}
})
const Todomodel=mongoose.model("todo",todoschema)

module.exports={
    Todomodel
}