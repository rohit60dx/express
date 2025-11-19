import express from 'express'
import nodemailer from 'nodemailer'

const app = express()


const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'viraat50dx@gmail.com',
        pass: 'zteo hzba wupc lifn'
    }

}

)



app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/mail', (req, resp) => {
    resp.render('mail')
})


app.post('/submit-email', (req, resp) => {
    console.log(req.body)
    const mailOptions = {
        from: 'viraat50dx@gmail.com',
        to: 'rohit50dx@gmail.com',
        subject: req.body.subject,
        text: req.body.mail
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            resp.send('Email Failed')
        } else {
            resp.send('email successfully sent!!!')
        }
    })


})


app.listen(8080)