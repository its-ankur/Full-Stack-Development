const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    "email":String,
    "password":{
        type:String,
        default:"Pass"
    },
});
const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;