import express from 'express';

const app = express();


app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.get("/add-user",(req,resp)=>{
    resp.render('addUser');
});


app.post("/submit-user",(req,resp)=>{
    resp.render('SubmitUser', req.body);
});




app.listen(8080)