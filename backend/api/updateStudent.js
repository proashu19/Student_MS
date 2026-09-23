import Student from "../models/Student.js";

const updateStudent = async (req, res) => {
    try {
        const { name, email, course, subjects } = req.body;

        if (!name || !email || !course || !subjects) {
            return res.status(400).json({ message: 'Name, email, course and subjects are required' });
        }

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { name, email, course, subjects },
            { new: true, runValidators: true }
        );

        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
}

export default updateStudent;