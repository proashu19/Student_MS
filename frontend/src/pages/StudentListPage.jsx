import StudentsList from '../Components/StudentsList';

function StudentListPage({ students, onDeleteStudent, onUpdateStudent }) {
    return (
        <StudentsList
            students={students}
            onDeleteStudent={onDeleteStudent}
            onUpdateStudent={onUpdateStudent}
        />
    );
}

export default StudentListPage;