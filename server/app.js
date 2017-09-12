const isProd = process.env.NODE_ENV === 'production'

import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'

import passport from 'passport'

import { Strategy } from 'passport-vkontakte'

const VkStrategy = Strategy

var VK_APP_ID = process.env.VK_APP_ID
var VK_APP_SECRET = process.env.VK_APP_SECRET

if (!VK_APP_ID || !VK_APP_SECRET) {
  throw new Error('Set VK_APP_ID and VK_APP_SECRET env vars to run the example')
}

// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.  However, since this example does not
//   have a database of user records, the complete VK profile is serialized
//   and deserialized.
passport.serializeUser(function (user, done) {
  console.log('!!! serializeUser', user)
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

// Use the VkStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and VK
//   profile), and invoke a callback with a user object.
passport.use(new VkStrategy(
  {
    clientID: VK_APP_ID,
    clientSecret: VK_APP_SECRET,
    callbackURL: 'http://localhost:3000/auth/vk/callback',
    scope: ['email'],
    profileFields: ['email']
  },
  function verify (accessToken, refreshToken, params, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      // To keep the example simple, the user's VK profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the VK account with a user record in your database,
      // and return that user instead.
      return done(null, profile)
    })
  }
))

const app = express()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.set('port', port)

// view engine setup
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(require('express-session')({secret: 'keyboard cat', resave: true, saveUninitialized: true}))
app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, 'public')))

app.use('/', require('../routes'))
app.use('/users', require('../routes/users'))
app.use('/auth', require('../routes/auth'))

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
import cfg from '../config/default.js'
// let config = require('../nuxt.config.js')
cfg.dev = !isProd
// Instanciate nuxt.js
// const nuxt = new Nuxt(config)
// Add nuxt.js middleware
// app.use(nuxt.render)
// Listen the server
app.listen(port, (err) => {
  if (err) {
    console.error(err)
  }

  if (__DEV__) { // webpack flags!
    console.log('> in development')
  }

  console.log(`> listening on port ${port}`)
})
// }

// start()

// module.exports = app;
