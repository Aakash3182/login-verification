const nodemailer = require("nodemailer");

const mailHandler = async (receiver, Sub, temp, fileAttachment = []) => {
  try {
    // Email config settings
    let transporter = await nodemailer.createTransport({
      service: process.env.MAIL_SERVICE,
      port: process.env.MAIL_PORT,
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Handler function to send email
    let res = await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: receiver,
      subject: Sub,
      html: `<div>${temp}</div>`,
      attachments: fileAttachment,
    });

    //  converting the mail to promise constructor
    return new Promise(function (resolve, reject) {
      resolve(res);
      reject("error dending email");
    });
  } catch (err) {
    return err.message;
  }
};

module.exports = mailHandler;
