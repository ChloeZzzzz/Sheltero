require('dotenv').config();
const mongoose = require("mongoose"); 
 
// Connect to MongoDB --- Replace this with your Connection String 
CONNECTION_STRING = "mongodb+srv://Shetero_20:<password>@cluster0-yekum.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>","sheltero20"); 
 
mongoose.connect(MONGO_URL, 
{   useNewUrlParser: true,
    useCreateIndex: true,  
    useUnifiedTopology: true,
    useFindAndModify: false,
    dbName: "mylibraryapp"
}); 
 
const db = mongoose.connection;

db.on("error", err => {
    console.error(err);
    process.exit(1);
});

db.once("open", async () => {
    console.log("Mongo connection started on " + db.host + ":" + db.port);
});
 
require("./author");