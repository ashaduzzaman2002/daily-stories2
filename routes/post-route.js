const express = require('express');
const router = express.Router();
const {
  home,
  renderCompose,
  composePost,
  getPost,
  about,
  contact,
} = require('../controllers/post-controller');
const {isLogin} = require('../middleware/authenticate')

// Routes
router.get('/', home);

router.route('/add_story').get(renderCompose).post(composePost);

router.get('/posts/:id', getPost);

router.get('/about', isLogin, about);

router.get('/contact', contact);

module.exports = router;
