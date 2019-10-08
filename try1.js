express = require('express')
request = require('request')
app = express()
var bodyparser = require('body-parser')//midlware for oruting
app.use(bodyparser.json())

request.get({'url':'http://localhost:3000/user'},(error,response,body)=>{
    if(error){
        console.log(error)
    }else{
        var data= JSON.parse(body)
        console.log(data[2])
    }
})
/*
//YOU CAN SEND ANOTHER REQUEST FROM THIS REQUEST
request.get({'url':'http://localhost:3000/user'},(error,response,body)=>{
    if(error){
        console.log(error)
    }else{
        var data= JSON.parse(body)
        console.log(data[2])
    }
})*/
//app.listen(3001)https://github.com/sureshdagde/Mobile-App.git
// git init
//git add .
//git commit -m "First commit"
//git remote add origin remote url
//git push origin master
