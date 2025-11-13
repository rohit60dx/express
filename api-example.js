import express from 'express';
import userData from './users.json' with { type: 'json' } ;

const app = express();

app.get("/", (req, resp) => {
    console.log(userData);
    resp.send(userData);
});

app.get("/user/:id", (req, resp) => {
    // const user = userData.find(u => u.id === parseInt(req.params.id)); // Alternative using filter
  let user = userData.filter(u => u.id === parseInt(req.params.id));
    if (user) {
        resp.send(user);
    } else {
        resp.status(404).send({ message: "User not found" });
    }
});


app.get("/username/:name", (req, resp) => {
    // const user = userData.find(u => u.name === parseInt(req.params.name)); // Alternative using filter
  let user = userData.filter(u => u.name.toLocaleLowerCase() === req.params.name.toLocaleLowerCase());
    if (user) {
        resp.send(user);
    } else {
        resp.status(404).send({ message: "User not found" });
    }
});


app.listen(8080)