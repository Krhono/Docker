const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Course = sequelize.define('Course', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    teacher: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    topic: {
        type: DataTypes.STRING
    }
});

module.exports = Course;
