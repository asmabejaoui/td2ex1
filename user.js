const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userschema = new mongoose.schema ({
    username:{
        type:String,
        required:true,
        unique:true,
        minlength:3,
        maxlength:30,
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minlength:6,
},
});

userschema.pre('save',async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
});
userschema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.campare(enteredPassword,this.password);
};
const user = mongoose.model('user',userschema);
module.exports=user;