import dotenv from 'dotenv';

dotenv.config();
const { DEV_DATABASE_URL, DATABASE_URL, SSL } = process.env;

const ssl = Boolean(SSL);

module.exports = {
  development: {
    url: DEV_DATABASE_URL,
    dialectOptions: {
      ssl,
    },
  },
  // test: {
  //   url: TEST_DATABASE_URL,
  // },
  production: {
    url: DATABASE_URL,
    dialectOptions: {
      ssl,
    },
  },
};
