import db from '../database/db.js';




// Function to render the signup page (GET /signup)
export const showSignupForm = (req, res) => {
  res.render('signup');  // renders signup.ejs page with the form
};

// Function to handle form submission (POST /submit)
export const handleSignup = (req, res) => {
  const { fname, lname } = req.body;

  if (!fname || !lname) {
    return res.status(400).json({ message: 'Missing fields' });
  }

  const sql = `INSERT INTO users (fname, lname) VALUES (?, ?)`;
  db.run(sql, [fname, lname], function (err) {
    if (err) {
      console.error(err.message);
      return res.status(500).json({ message: 'DB error' });
    }
    res.json({ message: `Saved! ID: ${this.lastID}` });
    
  });


  
};