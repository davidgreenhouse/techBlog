const User = require('./User');
const BlogPost = require('./BlogPost');
const BlogComment = require('./BlogPost');

User.hasMany(BlogPost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

User.hasMany(BlogComment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

BlogPost.hasMany(BlogComment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
})

BlogPost.belongsTo(User, {
  foreignKey: 'user_id'
});

BlogComment.belongsTo(BlogPost, {
  foreignKey: 'post_id'
})

module.exports = { User, BlogPost, BlogComment };