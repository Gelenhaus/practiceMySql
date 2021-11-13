const mysql = require('mysql2');
const express = require('express');
const cTable = require('console.table');


const PORT = process.env.PORT || 3001;
const app = express();

//Middeware does 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});






// app.get('/', (req, res) => {
//     res.json({
//         message: 'Hello World'
//     });
// });

// //GET all the people from employees
// app.get('/api/employees', (req, res) => {
//     const sql = `SELECT * FROM employees`;

//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// // GET a single employee
// app.get('/api/employee/:id', (req, res) => {
//     const sql = `SELECT * FROM employees WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// // Delete an employee

// app.delete('/api/employee/:id', (req, res) => {
//     const sql = `DELETE FROM employees WHERE id = ?`;
//     const params = [req.params.id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Candidate not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// });

// // Create a candidate
// app.post('/api/employee', ({ body }, res) => {

//     const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
//     VALUES (?,?,?,?)`;
//     const params = [body.first_name, body.last_name, body.role_id, body.manager_id];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });

