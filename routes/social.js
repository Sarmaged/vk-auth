var passport = require('passport');
var express = require('express');
var router = express.Router();

// GET /auth/vk
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in VK authentication will involve
//   redirecting the user to vk.com.  After authorization, VK will
//   redirect the user back to this application at /auth/vk/callback
router.get('/vk',
  passport.authenticate('vkontakte'),
  function(req, res){
    // The request will be redirected to VK for authentication, so this
    // function will not be called.
  });

// GET /auth/vk/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/vk/callback',
  passport.authenticate('vkontakte', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('/');
  });

module.exports = router;
