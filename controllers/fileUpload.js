// const File = require("../models/file");

// exports.localFileUpload = async (req, res) => {
//     try {
//         const file = req.files.file;
//         console.log("file", file);

//         let path = __dirname + "/files" + Date.now();
//         file.mv(path , (err) => {
//             console.log(err);
//         });
//         res.json({
//             success: true,
//             message: "File Uploaded Successfully"
//         });
//     }
//     catch (error) {
//         console.log("Not able to upload File");
//         console.log(error);
//     }
// };

const File = require("../models/file");

exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        console.log("file", file);

        // Use process.cwd() to get the current working directory
        let path = process.cwd() + "/files/" + file.name;
        // Use a promise-based approach to move the file
        await file.mv(path);
        res.json({
            success: true,
            message: "File Uploaded Successfully"
        });
    }
    catch (error) {
        console.log("Not able to upload File");
        console.log(error);
        // Send an appropriate response to the client
        res.status(500).json({
            success: false,
            message: "File Upload Failed"
        });
    }
};
