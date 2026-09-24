import { useState } from 'react';
import  ListItems from './ListItems';

function StudentsList({ 
    students,
    onDeleteStudent,
   onUpdateStudent
   

 }) 
 {
    const [searchTerm , setSearchTerm] = useState ('');

   const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
);


    return (
        <div className="panel student-panel">
            <h2>Students List</h2>
            <input
                type= "text"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search by name..."
                className="student-search"
                />

                {
                    filteredStudents.length === 0 ?
                    ( <p className= "empty-state">
                         {students.length === 0 ? 'No Student yet.' : 'No matching students.'}
                    </p>
                    ) :(
                        <ul className="student-list">
                            {
                                filteredStudents.map((student)=>(
                                    <ListItems
                                    student = {student}
                                    key = {student._id}
                                    onDeleteStudent={onDeleteStudent}
                                    onUpdateStudent={onUpdateStudent}
                                    />
                                ))
                            }
                        </ul>
                    )
                }



          
        </div>
    );
}

export default StudentsList;
