const { Course } = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const Courses = await Course.findAll({
        limit: 8
      })
      res.send(Courses)
    } catch (err) {
      res.status(500).send({
        error: 'error น่าจะดึงข้อมูลไม่ได้อ่ะมาดูเอา'
      })
    }
  },
  async post (req, res) {
    try {
      const course = await Course.create(req.body)
      res.send(course)
    } catch (err) {
      res.status(500).send({
        error: 'error สร้างคอร์ดไม่ได้'
      })
    }
  }
}
