const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {

    if (err) {
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected');
    //const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to inser todo', err)
    }
        
        console.log(JSON.stringify(result.ops, undefined, 2))
    });

    client.close();
});