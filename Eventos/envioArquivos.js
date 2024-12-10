var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'yy@gmail.com',
    pass: 'SENHA'
  }
});

var mailOptions = {
  from: 'yy@gmail.com',
  to: 'xx@gmail.com',
  subject: 'Enviando um Email com Node.js',
  text: 'Enviado!'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email Enviado: ' + info.response);
  }
});