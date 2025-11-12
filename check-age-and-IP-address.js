import express from 'express';


const app = express();


function checkAgeAndIP(req, resp, next) {
    const age = parseInt(req.query.age);
    const ip = req.socket.remoteAddress;
console.log(ip);
    if (isNaN(age) || age < 18) {
        return resp.status(403).send("<h1>Access Denied</h1><p>You must be at least 18 years old to access this site.</p>");
    }
    if (ip.includes("192.168.0.78")) {
        return resp.status(403).send("<h1>Access Denied</h1><p>Your IP address has been blocked.</p>");
    }
    next();
}

app.use(checkAgeAndIP);

app.get("/", (req, resp) => {
    resp.send("<h1>Welcome to the Home Page</h1>");
});


app.get("/contact", (req, resp) => {
    resp.send("<h1>Welcome to the contact Page</h1>");
});


app.get("/login", (req, resp) => {
    resp.send("<h1>Welcome to the login Page</h1>");
});


app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});