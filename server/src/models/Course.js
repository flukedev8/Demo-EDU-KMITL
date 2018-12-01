module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    title: DataTypes.STRING,
    number: DataTypes.STRING,
    branch: DataTypes.STRING,
    sector: DataTypes.STRING,
    faculty: DataTypes.STRING,
    professor: DataTypes.STRING,
    Descriptionshort: DataTypes.TEXT,
    Description: DataTypes.TEXT,
    document: DataTypes.STRING,
    img: DataTypes.STRING,
    youtubeId: DataTypes.STRING
  })

  return Course
}
