const router = require('express').Router();
const User = require('../models/user-model');




// auth employee
router.get('/emp',(req, res)=>{
    // select row_to_json (u) from ( SELECT "oauth".findById(${id}) as user) u;
    User.query(`select row_to_json (u) from ( select "lagang_hr".getAllEmployees() as employee) u;`,(err, res1)=>{
        console.log(res1.rows[0].row_to_json.employee)
        
        res.render('employee', {res1});
    });
});

// auth department
router.get('/dept',(req, res)=>{
    res.render('department');
});

// auth empdept
router.get('/empdept',(req, res)=>{
    res.render('empdept');
});

// auth salary
router.get('/salary',(req, res)=>{
    res.render('salary');
});


module.exports = router;