const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post, {
  foreignKey: 'created_by_id',
  onDelete: 'CASCADE'
});

Post.belongsTo(User, {
  foreignKey: 'created_by_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'created_by_id',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'created_by_id'
});

module.exports = { User, Post };
