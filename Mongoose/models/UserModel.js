const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    "email":String,
    "password":{
        type:String,
        default:"Pass"
    },
},{
    versionKey:false
});
const UserModel=mongoose.model('User',userSchema);
module.exports=UserModel;