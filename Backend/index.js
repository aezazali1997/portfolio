var express = require('express');
var router = express.Router();
let https = require('https');
var nodeMailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
let port = 3002 || process.env.port;
let transport = {
  host: creds.HOST,
  port: creds.PORT,
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  }
}
let transporter = nodeMailer.createTransport(transport);
transporter.verify((err, succ) => {
  if (err) {
    console.log("Error: ", err)
  }
  else {
    console.log("server is ready to take messages")
  }
});
router.post('/send', (req, res, next) => {
  console.log("called")
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name : ${name}\n email : ${email}\n message : ${message}`;
  let mail = {
    from: name,
    to: 'aezazali.pro@gmail.com',
    subject: 'Message from React Portfolio Contact Form',
    text: content,
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    }
    else {
      res.json({
        status: 'success'
      })
    }
  })
});
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);
app.listen(port, (err) => {
  if (err) {
    console.log("Server has some issue")
  }
  else {
    console.log(`app is listening on port ${port}`)
  }
})