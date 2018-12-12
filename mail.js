const express = require('express')
const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars')
const path = require('path')
const nodemailer = require('nodemailer')

var app = express()

// Set Static Folder
app.use('/public', express.static(path.join(__dirname, 'public')))

// Set View Engine 
app.engine('handlebars', expressHbs())
app.set('view engine', 'handlebars')

// Set Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/mail', (req, res) => {
    res.render('mail')
    console.log('mail page is loaded')
})

app.post('/send', (req, res) => {
    const output = 
    ` 
        <p>A new contact message from a client</p>
        <strong>Personal Info</strong>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Phone: ${req.body.phone}</li>
        </ul>
        <strong>Project Details</strong>
        <ul>
            <li>Project Type: ${req.body.proj_type}</li>
            <li>Project Idea: ${req.body.proj_idea}</li>
            <li>Budget: ${req.body.budget}</li>
            <li>Timeline: ${req.body.time}</li>
            <li>Current Website URL: ${req.body.url}</li>
        </ul>
        <strong>Communication Preference: </strong>
        <p>${req.body.contact_way}</p>
    `
    // Set nodemailer 
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.stackmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'ttoor@shaikhah.com', // generated ethereal user
            pass: "ttoor',v2018" // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    var htmlstream = fs.createReadStream('message.html');

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"TTOOR 👻" <ttoor@shaikhah.com>', // sender address
        to: 'ttoor.co@gmail.com, abayazid2013@gmail.com', // list of receivers
        subject: 'New Contact Form - TTOOR ✔', // Subject line
        text: output, // plain text body
        html: htmlstream // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Send message on success
        res.render('mail', {msg: 'Email has been sent successfully'})
    });
})

app.listen(3000, ()=>{
    console.log('server is working')
})