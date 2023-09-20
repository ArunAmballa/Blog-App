const mongoose=require('mongoose')

require("dotenv").config();
const dbConnect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("DB Connection is Successfull")})
    .catch((err)=>{console.log("DB Connectio Failed")
    process.exit(1);
})
    
}

module.exports=dbConnect;