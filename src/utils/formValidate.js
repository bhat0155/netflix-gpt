export const formValidate = (email, password) => {
  const validateEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const validatePassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!validateEmail) return "Email is invalid";
  if (!validatePassword) return "Password is invalid";
  return null;
};
