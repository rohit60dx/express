import express from 'express'
import session from 'express-session'


const app = express()

app.set('view engine', 'ejs')

app.use(session({
    secret: 'apple' //its just a example
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/login', (req, resp) => {
    resp.render('login')
})

app.post('/profile', (req, resp) => {
    req.session.data = req.body;
    console.log(req.session.data)
    resp.render('profile')
})

app.get('/', (req, resp) => {
    const userData = req.session.data;
    console.log(userData)
    resp.render('home-session', { userData })
})

app.listen(8080)