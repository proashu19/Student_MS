import { useState } from 'react';

function ListItems({
    student,
   
    onDeleteStudent,
     onUpdateStudent,
}) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(student.name);
    const [editedEmail, setEditedEmail] = useState(student.email);
    const [showSubjects, setShowSubjects] =useState(false);
    const [editedCourse, setEditedCourse] = useState(student.course);
   const [editedSubjects, setEditedSubjects] = useState(student.subjects || []);
    const [subjectInput, setSubjectInput] = useState('');

    const handleEdit = () => {
        setEditedName(student.name);
        setEditedEmail(student.email);
        setEditedCourse(student.course);
        setEditedSubjects(student.subjects || []);
        setSubjectInput('');
        setIsEditing(true);
    };

    const handleSave = () => {
        const name = editedName.trim();
        const email = editedEmail.trim();
        const course = editedCourse.trim();

        if (!name || !email || !course || editedSubjects.length === 0) {
            return;
        }

        onUpdateStudent(student._id, name, email, course, editedSubjects);
  
        setIsEditing(false);
    };

    const toggleSubjects = () => setShowSubjects((prev)=> !prev);

    const handleAddEditedSubject = () => {
    const trimmed = subjectInput.trim();
    if (!trimmed) return;
    setEditedSubjects((prev) => [...prev, trimmed]);
    setSubjectInput('');
    }; 

     const handleRemoveEditedSubject = (indexToRemove) => {
    setEditedSubjects((prev) => prev.filter((_, index) => index !== indexToRemove));
    };





    const handleCancel = () => {
        setEditedName(student.name);
        setEditedEmail(student.email);
          setEditedCourse(student.course);
         setEditedSubjects(student.subjects || []);
         setSubjectInput('');
        setIsEditing(false);
    };

    return (
        <li className="student-item">
            {isEditing ? (
                <div className="student-edit-form">
                    <input
                        type="text"
                        value={editedName}
                        onChange={(event) => setEditedName(event.target.value)}
                    />
                    <input
                        type="email"
                        value={editedEmail}
                        onChange={(event) => setEditedEmail(event.target.value)}
                    />
                    <input
                        type="text"
                        value={editedCourse}
                        onChange={(event) => setEditedCourse(event.target.value)}
                    />
                    <div className="subject-input-row">
                        <input 
                        type="text"
                        value={subjectInput}
                        onChange={(event) => setSubjectInput(event.target.value)}
                        placeholder="Add a subject"
                        />

                      <button type="button"
                         className="btn btn-secondary"
                         onClick={handleAddEditedSubject}>
                            Add
                         </button>


                    </div>

                     {editedSubjects.length > 0 && (
                      <ul className="subjects-preview-list">
                     {editedSubjects.map((subject, index) => (
                     <li key={index}>
                     {subject}
                     <button type="button" className="btn-remove" onClick={() => handleRemoveEditedSubject(index)}>
                        ✕
                    </button>
                     </li>
                      ))}
                      </ul>
    )}

                    
                    <div className="student-actions">
                        <button className="btn btn-primary" type="button" onClick={handleSave}>Save</button>
                        <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </div>
            ) : (
                <div className="student-row">
                    <div className="student-meta">
                        <span className="student-name">{student.name}</span> 
                        <span className="student-email">{student.email}</span>
                          <button type="button" className="course-toggle" onClick={toggleSubjects}>
                            {student.course} {showSubjects ? '▲' : '▼'}
                        </button>

                        {showSubjects && (
                            <ul className="subjects-list">
                                {student.subjects && student.subjects.length > 0 ? (
                                    student.subjects.map((subject, index) => 
                                    <li key={index}>{subject}</li>)
                                ) : (
                                    <li className="empty-state">No subjects added.</li>
                                )}
                            </ul>
                        )}
                    </div>
                    <div className="student-actions">
                        <button className="btn btn-secondary" type="button" onClick={handleEdit}>Edit</button>
                        <button className="btn btn-danger" type="button" onClick={() => onDeleteStudent(student._id)}>
                            Delete
                        </button>
                    </div>
                </div>
            )}
        </li>
    );
}

export default ListItems;