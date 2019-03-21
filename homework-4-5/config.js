const dbUser = "vitalii";
const dbPassword = "qwerty12121";

const config = {
  port: 8090,
  dbUser,
  dbPassword,
  databaseUrl: `mongodb+srv://${dbUser}:${dbPassword}@food-delivery-project-wbz66.mongodb.net/test?retryWrites=true`
};

module.exports = config;