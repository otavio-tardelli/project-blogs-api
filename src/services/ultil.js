const foundUser = (message) => {
  const err = new Error(message);
  err.name = 'foundUser';
  throw err;
};
const problemWithToken = (message) => {
  const err = new Error(message);
  err.name = 'problemWithToken';
  throw err;
};

module.exports = {
  foundUser,
  problemWithToken,
}; 