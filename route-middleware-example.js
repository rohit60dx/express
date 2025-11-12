import express from 'express';


const app = express();


function checkAgeAndIP(req, resp, next) {
    const age = parseInt(req.query.age);
    if (isNaN(age) || age < 18) {
        return resp.status(403).send("<h1>Access Denied</h1><p>You must be at least 18 years old to access this site.</p>");
    }
  else {
 next();
  }
   
}



function checkURL(req, resp, next) {
  
   
 console.log("Requested URL:", req.url);
 next();
 
   
}

app.use(checkAgeAndIP);

app.get("/",checkURL,(req, resp) => {
    resp.send("<h1>Welcome to the Home Page</h1>");
});


app.get("/contact",checkAgeAndIP,checkURL, (req, resp) => {
    resp.send("<h1>Welcome to the contact Page</h1>");
});


app.get("/login", checkURL,  (req, resp) => {
    resp.send("<h1>Welcome to the login Page</h1>");
});


app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});