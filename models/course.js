'use strict';
module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define('Course', {
    lecturer_id: DataTypes.INTEGER,
    course_name: DataTypes.STRING
  }, {});
  Course.associate = function(models) {
    // associations can be defined here
    Course.belongsToMany(models.Student, {
      through: 'StudentCourse',
      foreignKey: 'course_id',
      as: 'students',
    })
  };
  return Course;
};