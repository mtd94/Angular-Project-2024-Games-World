const router = require('express').Router();
const users = require('./users');
const themes = require('./themes');
const posts = require('./posts');
const likes = require('./likes');
const test = require('./test');
const { authController } = require('../controllers');
const games = require('./games');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

router.use('/users', users);
router.use('/games', games);
router.use('/themes', themes);
router.use('/posts', posts);
router.use('/likes', likes);
router.use('/test', test);

module.exports = router;
