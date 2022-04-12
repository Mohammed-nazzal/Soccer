const mongoose  = require('mongoose')
const uri = "mongodb+srv://Adv:Mongo1998@adv.0ia45.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri,  { useNewUrlParser: true, useUnifiedTopology: true } ).
then((result)=>{console.log('connected to db');})



