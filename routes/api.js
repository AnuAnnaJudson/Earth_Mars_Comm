const express=require('express')
const router=express.Router()
const earthToMarsController=require("../controllers/earthToMarsController")
const {logEvents}=require("../middleware/logger")

logEvents(`start request\n`,"reqLog.log")
router.route('/earth-mars-comm/message')
.post(earthToMarsController.chooseConverter)


module.exports=router