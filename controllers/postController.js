const Post=require("../models/postModel");

exports.createPost=async(req,res)=>{
    try
    {
        const {title,body}=req.body;

        const savedPost=await Post.create({title,body});
        res.status(200).json({
            post:savedPost,
            message:"Posted created successfully",
        })

    }
    catch(err){
        return res.status(500).json({
            error:"Error while Creating Post"
        })
    }
}
exports.getAllPosts=async(req,res)=>{
    try{
        const posts=await Post.find()
        res.status(200).json({
            post:posts
        })
    }
    catch(err){
        return res.status(500).json({
            error:"error while fetching all posts"
        })
    }
}