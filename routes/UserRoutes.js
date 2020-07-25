const express = require('express');
const {
  signup,
  login,
  logout,
  protect,
  restrictTo,
} = require('../controllers/AuthController');
const { GetAllUsers } = require('../controllers/UserController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/logout', logout);

router.use(protect);

router.route('/admin/users').get(restrictTo('admin'), GetAllUsers);

module.exports = router;
