const Comment=require("../models/commentModel");
const Post=require("../models/postModel");

exports.createComment=async(req,res)=>{
    try{
        const {post,user,body}=req.body;
        const savedComment=await Comment.create({post,user,body})
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true}).populate('body').exec();
        res.status(200).json({
            post:updatedPost,
        })

    }
    catch(err)
    {
        return res.status(500).json({
            error:"Error while Making Comment"
    })
   }
}