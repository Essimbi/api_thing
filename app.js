const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const stuffRoutes = require('./routes/stuff') ;
const userRoutes = require('./routes/user');

const app = express();


mongoose.connect('mongodb+srv://DeranotNode:DeranotNode77@cluster0.9a9onlj.mongodb.net/DataBaseOpenClassroom',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;