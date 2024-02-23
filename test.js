const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");


// Set up the Passport strategy:
passport.use(new LocalStrategy(
  function (username, password, done)
  {
    // Use the callback pattern as per the findByUsername function
    helper.findByUsername(username, async function (err, user)
    {
      if (err)
      {
        // Handle any error that occurred during findByUsername
        return done(err);
      }
      if (!user)
      {
        // If the user is not found
        return done(null, false, { message: 'Incorrect username.' });
      }

      // Now we proceed to check the password
      try
      {
        // Compare password with bcrypt within the callback
        
        const matchedPassword = await bcrypt.compare(password, user.password);
        if (!matchedPassword)
        {
          // If the password is wrong
          return done(null, false, { message: 'Incorrect password.' });
        }
        // If everything is okay, return the user
        return done(null, user);
      } catch (error)
      {
        // Handle any error that occurred during password comparison
        return done(error);
      }
    });
  }
));

// Serialize a user
passport.serializeUser(function (user, done)
{
  done(null, user.id); // user.id is saved to the session
});
// Deserialize a user
passport.deserializeUser(async function (id, done)
{
  await helper.findById(id, function (err, user)
  {
    if (err)
    {
      done(err)
    }
    else
    {
      done(null, user);
    }
  })
})