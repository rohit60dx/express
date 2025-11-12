import express from 'express'
const app = express();


app.set('view engine','ejs')
app.get("/",(req,resp)=>{
    resp.render('home',{name:'Rohit',ytChannel:'Code Step by step', age:29})
})

app.listen(8080)