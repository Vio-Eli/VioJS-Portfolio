const { Schema, model } = require('mongoose');

const projectSchema = new Schema({
    projectName: {
        type: String,
        required: 'This project this name.',
        trim: true,
    },
})

const newProject = model('Project', projectSchema);

module.exports = newProject;