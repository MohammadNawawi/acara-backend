export const RegisterUser = (req, res) => {
  const { name, email, password } = req.body;

  res.json({ message: "Register User", data: { name, email, password } });
};

export const LoginUser = (req, res) => {
  res.json({ message: "Login User" });
};
