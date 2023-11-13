const multer = require("multer")

const storage = multer.diskStorage({
    destination : function(req,file,cb) {
        cb(null, "./uploads/")
    },
    filename: function(req,file,cb) {
        console.log(file.mimetype.split("/")[1])
        cb(null, file.originalname + "." + file.mimetype.split("/")[1])
    }
})


module.exports = multer({storage: storage})
