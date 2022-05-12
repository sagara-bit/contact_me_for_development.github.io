const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/web",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("connection done");
}).catch((error)=>
{
    console.log(error);
})