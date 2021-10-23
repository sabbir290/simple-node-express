const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) =>{
    res.send('I am from node world');
});

const users =[
    {id: 0, name: 'Amin', email: 'amin@gmail.com', phone: '0171494'},
    {id: 1, name: 'Sabbir', email: 'sabbir@gmail.com', phone: '0171494'},
    {id: 2, name: 'Sakibba', email: 'sakibaa@gmail.com', phone: '0175494'},
    {id: 3, name: 'Rakib', email: 'rakib@gmail.com', phone: '0144494'},
    {id: 4, name: 'Manir', email: 'manik@gmail.com', phone: '0571494'},
    {id: 5, name: 'Kabir', email: 'kabir@gmail.com', phone: '0176294'},
    
]

app.get('/users', (req, res) =>{
    const search = (req.query.search);
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users)
    }
    
});

// app method
app.post('/users', (req, res) =>{
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('Hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

app.get('/users/:id', (req, res)=>{
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})
app.get('/fruits', (req, res) =>{
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) =>{
    res.send('Yammyyammy tok marka fazli');
})

app.listen(port, ()=>{
    console.log('Listening to port', port);
})