var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sldaloii13@gmail.com',
    pass: 'P@ss0701'
  }
});

var mailOptions = {
  from: 'sldaloii13@gmail.com',
  to: 'kero26@gmail.com',
  subject: 'Notes from xxx.com', //can it be the heading of the notes?
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});