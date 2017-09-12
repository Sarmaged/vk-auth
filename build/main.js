require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("passport");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_path__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_serve_favicon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_serve_favicon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_cookie_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_cookie_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_passport___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_passport__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport_vkontakte__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_passport_vkontakte___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_passport_vkontakte__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__config_default_js__ = __webpack_require__(13);
var isProd = "development" === 'production';












var VkStrategy = __WEBPACK_IMPORTED_MODULE_7_passport_vkontakte__["Strategy"];

var VK_APP_ID = process.env.VK_APP_ID;
var VK_APP_SECRET = process.env.VK_APP_SECRET;

if (!VK_APP_ID || !VK_APP_SECRET) {
  throw new Error('Set VK_APP_ID and VK_APP_SECRET env vars to run the example');
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete VK profile is serialized
//   and deserialized.
__WEBPACK_IMPORTED_MODULE_6_passport___default.a.serializeUser(function (user, done) {
  console.log(user);
  done(null, user);
});

__WEBPACK_IMPORTED_MODULE_6_passport___default.a.deserializeUser(function (obj, done) {
  done(null, obj);
});

// Use the VkStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and VK
//   profile), and invoke a callback with a user object.
__WEBPACK_IMPORTED_MODULE_6_passport___default.a.use(new VkStrategy({
  clientID: VK_APP_ID,
  clientSecret: VK_APP_SECRET,
  callbackURL: "http://localhost:3000/auth/vk/callback",
  scope: ['email'],
  profileFields: ['email']
}, function verify(accessToken, refreshToken, params, profile, done) {

  // asynchronous verification, for effect...
  process.nextTick(function () {

    // To keep the example simple, the user's VK profile is returned to
    // represent the logged-in user.  In a typical application, you would want
    // to associate the VK account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));

var app = __WEBPACK_IMPORTED_MODULE_0_express___default.a();
var host = process.env.HOST || '127.0.0.1';
var port = process.env.PORT || 3000;

app.set('port', port);

// view engine setup
app.set('views', __WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, '../views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(__WEBPACK_IMPORTED_MODULE_3_morgan___default.a('dev'));
app.use(__WEBPACK_IMPORTED_MODULE_4_cookie_parser___default.a());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_5_body_parser___default.a.urlencoded({ extended: true }));

app.use(__webpack_require__(9)({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(__WEBPACK_IMPORTED_MODULE_6_passport___default.a.initialize());
app.use(__WEBPACK_IMPORTED_MODULE_6_passport___default.a.session());

app.use(__WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_1_path___default.a.join(__dirname, 'public')));

app.use('/', __webpack_require__(10));
app.use('/users', __webpack_require__(11));
app.use('/auth', __webpack_require__(12));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// Start nuxt.js
// async function start() {
// Import and Set Nuxt.js options

// let config = require('../nuxt.config.js')
__WEBPACK_IMPORTED_MODULE_8__config_default_js__["a" /* default */].dev = !isProd;
// Instanciate nuxt.js
// const nuxt = new Nuxt(config)
// Add nuxt.js middleware
// app.use(nuxt.render)
// Listen the server
app.listen(port, function (err) {
  if (err) {
    console.error(err);
  }

  if (true) {
    // webpack flags!
    console.log('> in development');
  }

  console.log('> listening on port ' + port);
});
// }

// start()

// module.exports = app;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, "server"))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("serve-favicon");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("passport-vkontakte");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express-session");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(0);
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', user: req.user });
});

router.get('/account', ensureAuthenticated, function (req, res) {
  res.render('account', { user: req.user });
});

router.get('/login', function (req, res) {
  res.render('login', { user: req.user });
});

router.get('/logout', function (req, res) {
  req.logout();
  res.redirect('/');
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}

module.exports = router;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var express = __webpack_require__(0);
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var passport = __webpack_require__(1);
var express = __webpack_require__(0);
var router = express.Router();

// GET /auth/vk
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in VK authentication will involve
//   redirecting the user to vk.com.  After authorization, VK will
//   redirect the user back to this application at /auth/vk/callback
router.get('/vk', passport.authenticate('vkontakte'), function (req, res) {
  // The request will be redirected to VK for authentication, so this
  // function will not be called.
});

// GET /auth/vk/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
router.get('/vk/callback', passport.authenticate('vkontakte', { failureRedirect: '/login' }), function (req, res) {
  res.redirect('/');
});

module.exports = router;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  /*
  ** Headers of the page
  */
  head: {
    title: 'starter',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Auth project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css'],
  /*
  ** Add axios globally
  */
  build: {
    vendor: ['axios'],
    /*
    ** Run ESLINT on save
    */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
});

/***/ })
/******/ ]);
//# sourceMappingURL=main.map