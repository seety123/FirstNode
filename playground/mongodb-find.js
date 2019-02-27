//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },  (err,client)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb Server');
}
console.log('connected to MongoDB Server');
const db=client.db('test');

// db.collection('Todos').find({
//     _id:ObjectID('5c764836e56d6e12009009d5')

// }).toArray().then((docs) =>{
//     console.log('Todos');
//     console.log(JSON.stringify(docs, undefined, 2));

// },(err)=> { 
//     console.log('Unable to fetch data',err)
// });

// db.collection('Todos').find().count().then((count) =>{
//     console.log(`Todos count: ${count}`);
//    // console.log(JSON.stringify(docs, undefined, 2));

// },(err)=> { 
//     console.log('Unable to fetch data',err)
// });
db.collection('Users').find({name:'xyz'}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));

}); 
 
//client.close();  
});
