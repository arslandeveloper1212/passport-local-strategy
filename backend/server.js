const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passportLocalMongoose = require('passport-local-mongoose');
const session = require('express-session');
const env =require("dotenv");
const app = express();


app.use(express.json());

env.config({path: "./config.env"})
// Connect to MongoDB
mongoose.connect(process.env.DB);

// Set up session
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));

// Initialize passport and session
app.use(passport.initialize());
app.use(passport.session());

// Set up User model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

UserSchema.plugin(passportLocalMongoose);
const User = mongoose.model('User', UserSchema);

// Configure passport to use LocalStrategy with User model
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register route
app.post('/register', (req, res) => {
  User.register(new User({ username: req.body.username }), req.body.password, (err, user) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error registering user' });
    }
    passport.authenticate('local')(req, res, () => {
      res.json({ success: true, user });
    });
  });
});

// Login route
app.post('/login', passport.authenticate('local'), (req, res) => {
  res.json({ success: true, user: req.user });
});



app.get('/logout', (req, res) => {
  try {
    req.logout((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Error logging out' });
      }
      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ error: 'Error destroying session' });
        }
        res.clearCookie('connect.sid'); // Clear the session cookie
        res.json({ success: true });
      });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Check authentication route
app.get('/checkAuth', (req, res) => {
  res.json({ isAuthenticated: req.isAuthenticated(), user: req.user });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
