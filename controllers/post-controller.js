const Category = require('../models/Category');
const Stories = require('../models/Stories');
const data = require('../data');

// @route GET /
// get post and fetch data
exports.home = async (req, res) => {

  const limit = 5
  const categories = await Category.find().limit(limit);
  res.render('public/home', {
    categories,
    title: 'Daily Sotries'
  });
};

// @route GET /compose
// render compose page
exports.renderCompose = (req, res) => {
  res.render('public/compose', {
    title: 'Compose post - Daily Sotries'
  });
};

// @route POST /compose
// create post
exports.composePost = async (req, res) => {
  const { title, content } = req.body;

  const post = new Stories({
    title,
    content,
  });

  await post.save();
  res.redirect('/');
};

// @route GET /posts/:id
// get a post by id
exports.getPost = async (req, res) => {
  const { id } = req.params;

  const post = await Stories.findById(id).catch((err) => res.redirect(`/post/${id}`));

  res.render('public/post', {
    title: post?.title,
    content: post?.content,
  });
};


// @route GET /about
// render about page
exports.about = (req, res) => {
  res.render('public/about', { aboutContent: data.aboutContent, title: 'Abuot - Daily Sotries' });
};


// @route GET /contact
// render contact page
exports.contact = (req, res) => {
  res.render('public/contact', { contactContent: data.contactContent, title: 'Contact - Daily Sotries' });
};
