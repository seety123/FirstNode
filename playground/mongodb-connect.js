//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
var obj=new ObjectID();
console.log(obj);
/*var user={name:'Nagaraj7', age:23};
var {name}=user;
console.log(name);*/

MongoClient.connect('mongodb://localhost:27017',{ useNewUrlParser: true },  (err,client)=>{
if(err)
{
    return console.log('Unable to connect to MongoDb Server');
}
console.log('connected to MongoDB Server');
const db=client.db('test');

/*db.collection('Todos').insertOne({
text: 'something text here',
completed: false
}, (err,result) =>
{
    if(err)
    {  
       console.log('Unable to connect',err);
    }
    console.log(JSON.stringify(result.ops, undefined, 2));

});*/

/*db.collection('Users').insertOne({
    name: 'xyz',
    age: 23,
    address:'abc'
    }, (err,result) =>
    {
        if(err)
        {  
           console.log('Unable to connect',err);
        }
        console.log(result.ops[0]._id.getTimestamp());
    
    });*/
client.close();  
});
