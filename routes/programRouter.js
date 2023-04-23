const express = require("express");
const router = new express.Router();
const {ProgramSave,allPrograms, ProgramUpdate ,ProgramDelete, ProgramFind} = require("../Controllers/programController");


router.post('/add',ProgramSave);
router.get('/',allPrograms);
router.put('/update/:id', ProgramUpdate);
router.delete('/delete/:id', ProgramDelete);
router.get('/details/:id', ProgramFind);

module.exports = router;