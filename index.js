const express = require("express");
require("dotenv").config();
const fileUpload = require("express-fileupload")

const app = express();
PORT = process.env.PORT;

app.use(express.json());
app.use(fileUpload);

const db = require("./config/database");
db.connect();

// const cloudinary = require("./config/cloudinary");
// cloudinary.cloudinaryConnect();

const Upload = require("./routes/fileUpload");
app.use("/api/v1/upload", Upload);

app.listen(PORT, () => {
    console.log("Server started at port 4000");
});
