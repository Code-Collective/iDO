module.exports = {
  url: `mongodb://${process.env.IDO_DB_USER}:${encodeURIComponent(process.env.IDO_DB_PASSWORD)}${process.env.IDO_DB_HOST}:${process.env.IDO_DB_PORT}/${process.env.IDO_DB}`
}
