var express = require('express');
var router = express.Router();
var nodeMailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');

var transport = {
  /* host */
  // https://mailtrap.io/blog/react-contact-form/
}