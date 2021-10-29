const nodeMailer = require("nodemailer");

const sendMail = (seniorEmail, userEmail) => {
  console.log(seniorEmail, userEmail);

  const fromMail = "kgore1511@gmail.com";
  const toMail = seniorEmail;
  const subject = "Image Uploaded by " + userEmail;
  const text = "Hello, recently one image is uploaded by " + userEmail;

  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: "@gmail.com", //enter your email here
      pass: "123456", //enter you email password here
    },
  });

  const mailOptions = {
    from: fromMail,
    to: toMail,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, (error, response) => {
    if (error) console.log(error);
    else console.log(response);
  });
};
module.exports = sendMail;
