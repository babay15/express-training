var mongoose = require("mongoose");

// require("../models/Employee");

var Employee = mongoose.model('Employee', require("../models/Employee"));
// var Employee = mongoose.model('Employee', require("../models/Employee"));

var employeeController = {};
var employeeController2 = {};

//LIST OF EMPLOYEE
    employeeController.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employees/index", {employees: employees});
      }
    });
  };

//FIND ONE EMPLOYEE  
  employeeController.show = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employees/show", {employee: employee});
      }
    });
  };

//REDIRECTING TO CREATE EMPLOYEE PAGE
  employeeController.create = function(req, res) {
    res.render("../views/employees/create");
  };
  
//FUNCTION TO SAVE AN EMPLOYEE
  employeeController.save = function(req, res) {
    var employee = new Employee(req.body);
  
    employee.save(function(err) {
      if(err) {
        console.log(err);
        res.render("../views/employees/create");
      } else {
        console.log("Successfully created an employee.");
        res.redirect("/employees/show/"+employee._id);
      }
    });
  };

//REDIRECTING TO EDIT EMPLOYEE PAGE  
  employeeController.edit = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employees/edit", {employee: employee});
      }
    });
  };

//UPDATING AN EMPLOYEE  
  employeeController.update = function(req, res) {
    Employee.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, employee) {
      if (err) {
        console.log(err);
        res.render("../views/employees/edit", {employee: req.body});
      }
      res.redirect("/employees/show/"+employee._id);
    });
  };

//DELETING AN EMPLOYEE  
  employeeController.delete = function(req, res) {
    Employee.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Employee deleted!");
        res.redirect("/employees");
      }
    });
  };

  //

// LIST OF EMPLOYEE
  employeeController2.list = function(req, res) {
    Employee.find({}).exec(function (err, employees) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employees/index", {employees: employees});
      }
    });
  };

//FIND ONE EMPLOYEE  
  employeeController2.show = function(req, res) {
    Employee.findOne({_id: req.params.id}).exec(function (err, employee) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/employees/show", {employee: employee});
      }
    });
  };

//KALO OBJEKNYA CUMA SATU BISA BEGINI
module.exports = employeeController;  


//JIKA OBJEKNYA BANYAK
  // module.exports = {
  //     employeeController : employeeController,
  //     employeeController2 : employeeController2
  // }
