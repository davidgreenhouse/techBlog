const sequelize = require('../config/connection');
const { User, BlogPost, Comment } = require('../models');

const userData = require('./userData.json');
const blogPosts = require('./blogPosts.json');
const blogComments = require('./blogComments.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const posts = await BlogPost.bulkCreate(blogPosts, {
    individualHooks: true,
    returning: true,
  });

  const comments = await User.bulkCreate(blogComments, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDB();