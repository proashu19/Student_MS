import  ListItems from './ListItems';

function StudentsList({ 
    students,
    onDeleteStudent,
   onUpdateStudent
 

 }) {
    return (
        <div className="panel student-panel">
            <h2>Students List</h2>
            {students.length === 0 ? (
                <p className="empty-state">No Student yet.</p>
            ) : (
                <ul className="student-list">
                    {students.map((student) => (
                        <ListItems
                            student={student}
                            key={student._id}
                            onDeleteStudent={onDeleteStudent}
                            onUpdateStudent={onUpdateStudent}
                        />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default StudentsList;
