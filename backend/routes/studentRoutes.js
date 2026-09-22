import express from "express";
import getStudents from "../api/listStudent.js";

import addStudent from "../api/addStudent.js";
import updateStudent from "../api/updateStudent.js";
import deleteStudent from "../api/deleteStudent.js";


const router = express.Router();

router.get('/', getStudents);
router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;