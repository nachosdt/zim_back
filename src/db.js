// npm install mongoose -s
const mongoose= require("mongoose");
require('dotenv').config() 

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}.mongodb.net/nasa_pictures?retryWrites=true&w=majority`, {    
    useNewUrlParser: true, useUnifiedTopology:true
})
.then((db)=>{
    console.log("Database connected on", db.connection.host);        
})
.catch((err)=>{
    console.log(err)
});