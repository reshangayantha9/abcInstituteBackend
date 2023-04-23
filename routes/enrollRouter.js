const express = require("express");
const router = new express.Router();
const {enrollStudent,allEnroll} = require("../Controllers/enrollController");


router.post('/add',enrollStudent);
router.get('/',allEnroll);

module.exports = router;