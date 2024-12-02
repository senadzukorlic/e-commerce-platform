const { google } = require("googleapis")
const nodemailer = require("nodemailer")

require("dotenv").config()

const oAuth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
)

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

const sendTestEmail = async (to) => {
  const ACCESS_TOKEN = await oAuth2Client.getAccessToken()
  console.log("Access Token:", ACCESS_TOKEN)
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: process.env.MY_EMAIL,
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.REFRESH_TOKEN,
      accessToken: ACCESS_TOKEN,
    },
    tls: {
      rejectUnauthorized: true,
    },
  })

  const from = "JacpiStore"
  const subject = " Welcome to the JacpiStore "
  const html = `
    <p>Hey ${to},</p>
    <p>🌻 Your account is successfuly 🌻</p>
    <p>Thank you</p>
    `
  return new Promise((resolve, reject) => {
    transport.sendMail({ from, subject, to, html }, (err, info) => {
      if (err) reject(err)
      resolve(info)
    })
  })
}

module.exports = { sendTestEmail }
