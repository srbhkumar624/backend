const mongoose=require('mongoose');
const authschema=new mongoose.Schema({
    email:{type: 'string',required: true},
    password:{type: 'string',required: true},
    // name:{type: 'string',required: true}
})
const Authmodel=mongoose.model("auth",authschema)

module.exports={Authmodel}