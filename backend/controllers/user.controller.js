import { response } from "express";
import User from "../models/user.js";


const getAllUser = async (req, res) => {
    try{
        const post = await User.find().sort({createdAt: -1})
        res.status(200).json(post)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"get Internal server error"})

    }
}

const getUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.status(200).json(user)

    }catch(err){
        console.log(err)
        res.status(500).json({error:"get Internal server error"})

    }
}

const updateUser = async (req, res) => {
    try{
        const user = await User.findById(req.params.userId)
        if (!user) {
            return res.status(404).json({ error: 'User not found' }); 
          }
        user.bio = req.body.bio
        await user.save()
        
        res.status(200).json({msg:"update success"})

    }catch(err){
        console.log(err)
        res.status(500).json({error:"update Internal server error"})
    }
}

export default {getAllUser, updateUser, getUser};