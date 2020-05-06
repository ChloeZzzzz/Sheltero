const {MongoClient} = require("mongodb");

const url = "mongodb+srv://Shetero_20:sheltero20@cluster0-yekum.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url);

async function connect(){
    try{
        await client.connect();
    }
    catch(err){
        console.log(err.stack);
    }
}

async function disconnect(){
    await client.close();
}

async function insert_data(data, database, collection){
    try{
        const db = client.db(database);
        const col = db.collection(collection);

        const p = await col.insert(data);
    }
    catch(err){
        console.log(err.stack);
    }
}

async function get_data(data, database, collection){
    try{
        const db = client.db(database);
        const col = db.collection(collection);

        const myDoc = await col.find(data);

        return mydoc;
    }
    catch(err){
        console.log(err.stack);
    }
}

run().catch(console.dir);

module.exports=[
    insert_data,
    get_data,
    connect,
    disconnect,
]