const bookshelf = require('../bookshelf');

const Comment = bookshelf.model('Comment', {
    tableName: "comments"
})

module.exports = Comment;