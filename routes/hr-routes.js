const router = require('express').Router();
const User = require('../models/user-model');

// auth employee
router.get('/emp',(req, res)=>{
    User.query(`select row_to_json (u) from ( select "lagang_hr".getAllEmployees() as employee) u;`,(err, res1)=>{
        if(err){
            alert(err)
        }else{
            console.log(res1.rowCount)
            res.render('employee', {res1});
        }
    });
});

// auth department
router.get('/dept',(req, res)=>{
    User.query(`select row_to_json (u) from ( select "lagang_hr".getAllDepartments() as department) u;`,(err, res1)=>{
        if(err){
            alert(err)
        }else{
            console.log(res1.rows[0].row_to_json.department)
            console.log(res1.rowCount)
            res.render('department', {res1});
        }
    });
});

// auth empdept
router.get('/empdept',(req, res)=>{
    User.query(`select row_to_json (u) from ( select "lagang_hr".getEmpDept() as empdept) u;`,(err, res1)=>{
        if(err){
            alert(err)
        }else{
            console.log(res1.rows[0].row_to_json.empdept)
            console.log(res1.rowCount)
            res.render('empdept', {res1});
        }
    });
});

// auth salary
router.get('/salary',(req, res)=>{
    User.query(`select row_to_json (u) from ( select "lagang_hr".getSalary() as salary) u;`,(err, res1)=>{
        if(err){
            alert(err)
        }else{
            console.log(res1.rows[0].row_to_json.salary)
            console.log(res1.rowCount)
            res.render('salary', {res1});
        }
    });
});


module.exports = router;