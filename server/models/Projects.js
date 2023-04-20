const bookshelf = require('../bookshelf');

const Project = bookshelf.model('Project', {
    tableName: "projects"
})

module.exports = Project;