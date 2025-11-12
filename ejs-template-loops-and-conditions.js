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



app.get("/users",(req,resp)=>{
    const users=['Rohit','Virat','Kumar','Chaudhary','Rolex']
    resp.render("users",{users:users, isLogin:true});
})


app.listen(8080)