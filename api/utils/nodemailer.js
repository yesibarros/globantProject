const nodemailer = require("nodemailer");


 
 
const sendEmail = async (accion,to,subject,text,html) => {
  try {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465, //
      secure: true, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });
    // '"Se registro " <usuariologueado@g.com>'l
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `'${accion}' MENTOR ME - Globant` , // sender address
      to, // list of receivers
      subject , // Subject line
      text , // plain text body
      html , // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
   } catch (err) {
    console.log(err);
  }
}

module.exports = {sendEmail}