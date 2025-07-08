
export const showForm = (req, res) => {
  res.sendFile('signup.html', { root: './public' }); // Or render EJS if you want
};

export const handleForm = async (req, res) => {
  const { name, email } = req.body;

  // TODO: Save to DB or validate if needed
  // const user = await saveUser({ name, email });

  const dashboardData = {
    userName: name,
    
  };

  res.render('home', dashboardData);
};