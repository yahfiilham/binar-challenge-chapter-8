// setup database here, change the values to suit your environment
module.exports = {
  HOST: "127.0.0.1",
  USER: "postgres",
  PASSWORD: "ancol700",
  DB: "learn_swagger",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
