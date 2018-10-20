module.exports = {
  register (req, res) {
    res.send({
      message: `Welcom in websit ${req.body.email} Have fun! and ${req.body.password}`
    })
  }
}
