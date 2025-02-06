const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    mobile:{
        type:Number,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    image:{
        type:String,
        default:""
    },
    role:{
        type:String,
        enum:["admin", "user"],
        default:"user"
    },
    address:{
        type:String,
        default:""
    },
    isActive:{
        type:Boolean,
        default:true
    },
}, {
    collection: 'users',
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)