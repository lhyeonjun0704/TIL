const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
const User = require('./models/User');

const server = express();

// server.get('/', (req, res) => {
//     const newUser = new User();
//     newUser.email = 'danny@gmail.com';
//     newUser.name = 'danny';
//     newUser.age = 25;
//     newUser.save()
//     .then((user) => {
//         console.log(user);
//         res.json({
//             message: 'User Created Successfully'
//         })
//     })
//     .catch((err) => {
//         res.json({
//             message: 'User was not successfully created'
//         });
//     });
// });



server.listen(3000, (err) => {
    if(err){
        return console.log(err);
    }else{
        mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true}, (err)=>{
            if(err){
                console.log(err);
            }else{
                console.log('connected to database successfully');
            }
        });
    }
});


