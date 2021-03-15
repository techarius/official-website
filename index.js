const express=require('express');
const path=require('path');
const ejsMate=require('ejs-mate');
const bodyParser = require("body-parser");

const app=express();
app.engine('ejs',ejsMate);
app.use(bodyParser.urlencoded({ 
    extended:true
}))

app.use(express.static(path.join(__dirname,"public")));
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.get('/',(req,res)=>
{
    res.render('index');
})
app.get('/home',(req,res)=>
{
    res.render('home')
})
app.get('/login',(req,res)=>
{
    res.render('login')
})
app.all('*',(req,res)=>
{
    res.send("Error 404.Page not found.")
})
const port=process.env.PORT || 8080;
app.listen(port,()=>{
    console.log(`LISTENING ON PORT ${port}`);
})