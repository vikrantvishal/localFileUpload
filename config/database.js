const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then (console.log("DB Connection Successful"))
    .catch((error) => {
        console.log("Issue in DB Connection");
        console.error(error);
        process.exit(1);
    });
};