import mongoose from "mongoose";
import UserModel from "./user.js"


const postSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
    },
    text:{
        type: String,
        maxlength: 500,
    },
    img:{
        type: String,

    },
    
}, {timestamps: true})


const Post = mongoose.model("Post", postSchema)

export default Post;