import express from 'express';

const app = express();

app.get("/", (req, resp) => {
    const users = ['rohit', 'virat', 'kumar', 'chaudhary', 'rolex']
    let data = `<ul>`
    for (let user of users) {
        data += `<li><a href ="user/${user}">${user}</a></li>`;
    }
    data += `</ul>`;
    resp.send(data);
});

app.get("/user/:name", (req, resp) => {
    resp.send(`<h1>This is ${req.params.name}'s profile</h1>`);
});

app.listen(8080)