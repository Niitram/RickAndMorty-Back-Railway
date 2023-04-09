const server = require("./src/server.js")
const { conn } = require('./src/DB_connection.js');
const PORT = process.env.PORT || 3001;



conn
    .sync({ alter: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log("Listening on port", PORT);
        });
    })
    .catch((err) => console.log(err.message));