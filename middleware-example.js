import express from 'express';
import path from 'path';
import { readFileSync } from 'fs';


const app = express();
const absPath = path.resolve("view");


function checkRoute(req, resp, next) {
    const validRoutes = ["/", "/about", "/contact", "/service", "/style.css"];
    if (validRoutes.includes(req.path)) {
        console.log("Valid Route:", req.path);
        next();
    } else {
           console.log("Valid Route:", req.path);
        resp.status(404).sendFile(absPath + "/404Error.html");
    }
}

app.use(checkRoute);
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



app.listen(8080, () => {
    console.log("Server is running on http://localhost:8080");
});