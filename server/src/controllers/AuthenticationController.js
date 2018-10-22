const { User } = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      const user = await User.create(req.body)
      res.send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'กรุณาตรวจสอบ email ของท่าน email นี้ถูกใช้แล้ว'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, Password } = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          error: 'ข้อมูลในการ login ไม่ถูกต้อง กรุณาตรวจสอบ Email อีกครั้ง'
        })
      }

      const isPasswordValid = await user.comparePassword(Password)
      console.log(isPasswordValid)
      if (!isPasswordValid) {
        return res.status(403).send({
          error: 'ข้อมูลในการ login ไม่ถูกต้อง กรุณาตรวจสอบ Password อีกครั้ง'
        })
      }

      const userJson = user.toJSON()
      res.send({
        user: userJson,
        token: jwtSignUser(userJson)
      })
    } catch (err) {
      res.status(500).send({
        error: 'error กรุณา login อีกครั้ง'
      })
    }
  }
}
