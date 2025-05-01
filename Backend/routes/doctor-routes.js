const express=require('express');
const { addDoctor, getDoctor } = require('../controllers/doctor-controller');
const router=express.Router();

router.post('/addDoctor',addDoctor);
router.get('/list-doctor-with-filter',getDoctor);
module.exports=router;