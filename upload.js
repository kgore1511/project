const mail=require('./sendMail')
const multer=require('multer')

const fileStorageEngine=multer.diskStorage({
    destination: (req,res,cb) =>{
        cb(null,'./images')
    },
    filename: (req,file,cb) =>{
        cb(null,file.originalname)
        
    }
})

const upload=multer({storage:fileStorageEngine})
module.exports=upload