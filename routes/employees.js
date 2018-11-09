var express = require('express');
var router = express.Router();
var employee = require("../controllers/EmployeeController.js");

//GET EMPLOYEE LIST
router.get('/', employee.list);

//GET ONE EMPLOYEE
router.get('/show/:id', employee.show);

//REDIRECTING TO CREATE PAGE
router.get('/create', employee.create);

//SAVE AN EMPLOYEE
router.post('/save', employee.save);

//REDIRECTING TO EDIT EMPLOYEE PAGE
router.get('/edit/:id', employee.edit);

//UPDATING AN EMPLOYEE
router.post('/update/:id', employee.update);

//DELETE AN EMPLOYEE
router.post('/delete/:id', employee.delete);

module.exports = router;