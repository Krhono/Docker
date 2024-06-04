'use strict'

const Course = require('./models/course');

module.exports = {
    Query: {
        getCourses: async () => {
            return await Course.findAll();
        },
        getCourse: async (root, args) => {
            return await Course.findByPk(args.id);
        }
    },
    Mutation: {
        createCourse: async (root, args) => {
            return await Course.create(args.input);
        }
    }
}
