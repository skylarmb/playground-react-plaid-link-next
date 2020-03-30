require('dotenv').config();

module.exports = {
  env: {
    REACT_APP_PLAID_PUBLIC_KEY: process.env.REACT_APP_PLAID_PUBLIC_KEY,
  },
};
