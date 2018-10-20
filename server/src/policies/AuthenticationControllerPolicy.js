const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      Password: Joi.string().regex(
        new RegExp('^[a-zA-z0-9]{8,32}$')
      )
    }

    const { error } = Joi.validate(req.body, schema)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'คุณต้องตรวจสอบความถูกต้องของ email.'
          })
          break
        case 'Password':
          res.status(400).send({
            error: `คุณต้องตรวจสอบการใส่รหัสผ่านจะต้องเป็นไปตามกฏดังนี้
            <br>
            1.จะต้องมีตัวอักษร , ตัวเลข , ตัวพิมพ์เล็กตัวพิมพ์ใหญ่
            <br>
            2.จะต้องมีความยาวของรหัสผ่านตั้งแต่ 8 ตัว และไม่เกิน 32 ตัว
            `
          })
          break
        default:
          res.status(400).send({
            error: 'Invalid registeration information'
          })
      }
    } else {
      next()
    }
  }
}
