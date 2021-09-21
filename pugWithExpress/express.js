const express  = require('express');
const path = require('path');
const app = express();

// For serving static files
app.use('/static',express.static('public'));

// Set the template engine as pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views',path.join(__dirname,'views'));

// pug api
app.get('/demo',(req,res)=>{
    res.status(200).render('demo',{title: 'Akram', message: 'Hello there and Implementing pug!'})
})

// using HTML
app.get('/demo2',(req,res)=>{
    res.status(200).render('index',{title:"This is plain HTML use in pug","content":"demo for using pug"});
});

/* listening on port 3000 for express server*/
app.listen(3000,()=>{
    console.log('Node server started with port 3000');
})