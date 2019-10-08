var mongoose = require("mongoose");

 var user = mongoose.Schema({
        name: {type:String},
        add:  {type:String}

 })
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
 module.exports = mongoose.model("user",user);