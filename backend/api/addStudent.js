

import Student from "../models/Student.js";

const addStudent = async(req , res) => {
    try {
        const {name , email , course , subjects } = req.body;
         if (!name || !email || !course || !subjects ){
             return res.status(400).json
             ({ message: 'Name , email course and subjects are required' });
         }
       const student = await Student.create({ name, email, course, subjects });
    res.status(201).json(student);
        
    } catch (error) {
        res.status(500).json({ 
      success: false, 
      message: 'Internal server error', 
      error: error.message 
    });
    }
}

export default addStudent;