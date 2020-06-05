// require('dotenv').config;
const mongoose = require("mongoose");


CONNECTION_STRING = "mongodb+srv://Shetero_20:<password>@cluster0-yekum.mongodb.net/test?retryWrites=true&w=majority";
MONGO_URL = CONNECTION_STRING.replace("<password>", "sheltero20"/*process.env.MONGO_PASSWORD*/);

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  dbName: "Sheltero"
},function(err) {
  if(!err) {
    console.log("connected to mongo.");
  } else {
    console.log("Failed to connect to mongo!", err);
  }
});

const db = mongoose.connection;
db.on("error", err => {
  console.error(err);
  process.exit(1);
});

db.once("open", async () => {
  console.log("Mongo connection started on " + db.host + ":" +
db.port);
});

require("./users");
