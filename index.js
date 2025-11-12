// // const express = require('express');
// import express from 'express';
// import home, { contact } from './pages/home.js';
// import { about } from './pages/about.js';
// import { login } from './pages/login.js';
// import { submit } from './pages/submit.js';
// const app = express();

// // app.get("",(req,resp)=>{
// //     resp.send("<h1>Basic node js example</h1>")
// // });
// // app.get("/home",(req,resp)=>{
// //     resp.send(home())
// // });
// // app.get("/about",(req,resp)=>{
// //    resp.send(about())
// // });
// // app.get("/contact",(req,resp)=>{
// //      resp.send(contact())
// // });



// app.get("/", (req, resp) => {
//     resp.send(home())
// });

// app.get("/login", (req, resp) => {
//     resp.send(login())
// });



// app.post("/submit", (req, resp) => {
//     resp.send(submit())
// });

// app.get("/about", (req, resp) => {
//     resp.send(about())
// });

// app.listen(8080)




import express from 'express';
import path from 'path';
import { readFileSync } from 'fs';

const app = express();
const absPath = path.resolve("view");

// Serve CSS
// app.get("/style.css", (req, resp) => {
//     resp.sendFile(absPath + "/style.css");
// });

// You can also use express.static to serve static files
app.use(express.static(absPath));        

// Helper: Read and send header + page
const sendPage = (res, page) => {
    const header = readFileSync(absPath + "/header.html", 'utf8');
    const content = readFileSync(absPath + "/" + page, 'utf8');
    res.send(header + content);
};

// Routes
app.get("/", (req, resp) => {
    sendPage(resp, "home.html");
    // resp.sendFile(absPath + "/home.html" ); // you can also send the HTML/CSS file directly
});

app.get("/about", (req, resp) => {
     sendPage(resp, "/about.html");

});

app.get("/contact", (req, resp) => {
      sendPage(resp, "/contact.html");
  
});

app.get("/service", (req, resp) => {
     sendPage(resp, "/service.html");
    // resp.sendFile(absPath + "/service.html" );
});


app.use((req, resp) => {
    resp.status(404).sendFile(absPath + "/404Error.html");
});

app.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});