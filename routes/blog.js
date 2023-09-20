const express=require('express')
const router=express.Router();


//Import Controllers
const {createPost,getAllPosts}=require("../controllers/postController");
const {createComment}=require("../controllers/commentController");
//Mapping Controller
router.post("/createPost",createPost);
router.post("/createComment",createComment);
router.get("/getAll",getAllPosts);
//Export router

module.exports=router;