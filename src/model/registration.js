const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    Name:{
        type:String,
        // required:true,
    },
    Contact:{
        type:Number,
        required:true,
        unique:true
    }
});

const Register=mongoose.model("Register",userSchema);

module.exports=Register;