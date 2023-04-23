const express = require("express");
const router = new express.Router();
const {studentSave,allStudents,studentUpdate,studentDelete,studentFind} = require("../Controllers/studentController.js");


router.post('/add',studentSave);
router.get('/',allStudents);
router.put('/update/:id', studentUpdate);
router.delete('/delete/:id', studentDelete);
router.get('/details/:id', studentFind);

module.exports = router;