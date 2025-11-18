import express from 'express'

const app = express()

app.set('view engine', 'ejs')


app.use(express.urlencoded({ extended: true }))  
app.use(express.json())

app.get('/login', (req, resp)=>{
resp.render('login')
})

app.post('/profile', (req, resp)=>{
const {name} = req.body;
    console.log(name)
    resp.setHeader('Set-Cookie',"login=true")
    resp.setHeader('Set-Cookie',"name=" +req.body.name)
resp.render('profile')
})

app.get('/', (req, resp) => {
    const isLoggedIn = req.headers.cookie?.includes('login=true')
    const name = req.headers.cookie
        ?.split(';')
        ?.find(c => c.trim().startsWith('name='))
        ?.split('=')[1]
        
    console.log("Logged in:", isLoggedIn)
    console.log("User name from cookie:", name)

    resp.render('home-cookie', { name, isLoggedIn })
})

app.listen(8080)