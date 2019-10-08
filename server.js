const app =require("express")()
var mongoose = require("mongoose");
var bodyparser = require('body-parser')//midlware for oruting
app.use(bodyparser.json())// moddleware
//app.use(bodyparser.urlencoded({extended:true}))
mongoose.promise = global.promise
console.group("sssssssssssssssssssssssss"+mongoose.connect('mongodb://localhost:27017/api'));

require("./model/user");
var user = mongoose.model("user");
//var user2 = new user();

   // user2.name="suresh",
    //user2.add="pune"
    //user2.save(user2);

app.get("/user/:id", async (req , res)=>{
    try{
        //var userput= new user(); use only when you want to create new document
        var data = await user.find({_id:req.params.id})
        res.send(data);
    }catch(err){
        res.send(err)
    } 
    
})
app.get("/user", async (req,res)=>{
    try{
        console.log("ppppppppppppppppppppppppppppppppppp");
        var userdata = await user.find({})
        res.send(userdata)
    }
    catch{
        res.send("error----------------")
    }
})
app.post("/user", async (req , res)=>{
    try{
        var user2 = new user();
        user2.name=req.body.name;
        user2.add=req.body.add;
        //res.send("to")
        await user2.save();
        res.send(user2)
    }catch(error){
        res.send(error)
    }
   
})
app.listen(3000,()=>console.log("server is running"))