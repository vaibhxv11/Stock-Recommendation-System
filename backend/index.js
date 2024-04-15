const express =require("express");
const app=express();



const database =require("./config/database");
const cookieParser  =require("cookie-parser");
//to connect with frontend
const cors =require('cors')
const dotenv =require("dotenv");

dotenv.config();
const PORT =process.env.PORT || 4000 ;

//database connect
database.connect();

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    // frontend link
          cors({
         origin:"http://localhost:3001" ,
         credentials :true
    })

)




//mount routes

app.use("/api/v1/auth" , userRoutes)
app.use("/api/v1/profile" , profileRoutes)



//default route 
app.get("/" , function(req , res) {
    return res.json({
        success :true ,
        message :"YOur server is up and running.."
    })
})


app.listen(PORT, ()=>{
    console.log(`App is running at ${PORT}`)
})


