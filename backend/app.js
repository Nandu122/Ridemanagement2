
const express = require("express")
const mongoose = require("mongoose")
const bcrypt =require("bcrypt")
const cors = require("cors")
const jwt = require("jsonwebtoken")
const multer = require('multer');


const app = express()

app.use(cors({
    origin:true
}))


app.use(express.json())

//create static foler with express and access with http://localhost:7000/uploads/filename



const imagesupload=multer({

    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
            cb(null,'uploads/')
        },
        filename:(req,file,cb)=>{
            cb(null,Date.now()+"-"+file.originalname)
        }
    })
})


app.use("/uploads",express.static("uploads"))

// console.log(Date.now());

app.post("/image_upload",imagesupload.single("file"),(req,res)=>{
    console.log(req.file);
    res.send("success")
})






app.get("/",(req,res)=>{
    console.log("hello");
})

app.post("/",(req, res)=>{
    const{name,email,password}= req.body

    console.log(email);

res.send(req.body)    
})


const userSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile_image:{
        type:String,
    }
}) 

const User=mongoose.model("USER", userSchema)



app.post("/Register",imagesupload.single("file"), (req,res)=>{


    console.log(req.file);

User.findOne({email:req.body.email}).then((user_present)=>{
    console.log(user_present);
    if(user_present){
        res.send("user already present")

    }else{

        bcrypt.hash(req.body.password,10).then((hashedPassword)=>{
            console.log(hashedPassword);
            if(hashedPassword){
            
            const table=User({
                name:req.body.name,
                email:req.body.email,
                password:hashedPassword,
                profile_image:req.file.path
        })


            

    table.save().then(()=>{
        res.send("saved success")
    }

    )
    .catch((err)=>{
        res.send("failed")
    })
} 
        }).catch(err=>{
            res.send("cannot hash password")
        }) 
}
})
})


const rideSchema=new mongoose.Schema({
    ridename:{
        type:String
    },
    ride_description:{
        type:String
    },
    ride_image:{
        type:String
    }
}) 

const ride=mongoose.model("RIDES",rideSchema)




app.post("/addride",imagesupload.single("rideimage"),(req,res)=>{

    console.log(req.body);
    console.log(req.file);



    const RIDE=ride({
        ridename:req.body.ridename,
        ride_description:req.body.ride_description,
        ride_image:req.file.path
})

RIDE.save().then(()=>{
    res.send("ride added sucessfully")
}).catch(err=>{
    res.send(err)
})
})








app.post("/view_ride",(req,res)=>{
    ride.find().then((rides_output)=>{
        res.send(rides_output)
    }).catch(err=>{
        res.send(err)
    })
})


//create api with parameter id
app.post("/ride_with_id/:id",(req,res)=>{


    const id=req.params.id
    ride.findById({_id: id}).then(rides_output=>{
        res.send(rides_output)

    }).catch(err=>{
        res.send(err)
    })
})






app.post("/login2" ,(req,res)=>{
    User.findOne({email:req.body.email}).then((user_present)=>{
console.log(user_present);
console.log(req.body);
if(user_present){

    bcrypt.compare(req.body.password, user_present.password,(err,result) =>{
        if(err){
            res.send({token:null,msg:"error on comparing password"})


        }else{
            console.log(result);
            if(result){
                const token=jwt.sign(req.body.email,"ammu1")
                console.log(token);
                res.send({token:token,msg:"Login success"})
  

            }else{
                res.send({token:null,msg:"not matching"})

            }
        }
    })

}else{
    res.send({token:null,msg:"login note success"})

}
    }).catch(err=>{
        res.send("somthing went wrong")
    })
})

app.post("/getuser",(req,res)=>{
    const token=req.body.token;

    jwt.verify(token,"ammu1",(err,decoded)=>{
        if(err){
            res.send("jwt verification failed")
        }else{
            console.log(decoded);
            User.findOne({email:decoded}).then(user_present =>{
                console.log(user_present);
                res.send(user_present)
                
            })
        }

    })
})
mongoose.connect("mongodb+srv://ammunandana385:AQlSkE6qmWq2HlIh@cluster0.gnt7qn7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("database connected");
}).catch((err)=>{
    console.log("database not connected",err);
})





app.listen(7000,()=>{
    console.log("server listen at port 7000");
})






