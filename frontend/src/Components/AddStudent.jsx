import { useState } from 'react';


function AddStudent({onAddStudent}) {
    const [inputNameValue, setInputNameValue] = useState('');
    const [inputEmailValue, setInputEmailValue] = useState(''); 
    const [inputCourseValue, setInputCourseValue] = useState('');
    const [inputSubjectsValue, setInputSubjectsValue] = useState('');
    const [subjectsList, setSubjectsList] = useState([]);


    const handleInputName = (event) => {
        setInputNameValue(event.target.value);
    }

    const handleInputEmail = (event) => {
        setInputEmailValue(event.target.value);
    }

    const handleInputCourse = (event) => {
        setInputCourseValue(event.target.value);
    }

    const handleInputSubjects = (event) =>{
        setInputSubjectsValue(event.target.value);
    }

    const handleAddSubject = ()=>{
        const trimmed = inputSubjectsValue.trim();
        if(!trimmed) 
            return;

        setSubjectsList((prevList)=> [...prevList, trimmed]);
        setInputSubjectsValue('');
    }

    const handleRemoveSubject =(indexToRemove)=>{
        setSubjectsList((prevList)=> prevList.filter((_, index)=>
        index !== indexToRemove));
    }



    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputNameValue || !inputEmailValue || !inputCourseValue || 
            subjectsList.length === 0) {
            alert('Please fill in name, email, course and at least one subject.');
            return;
        }
        onAddStudent({ name: inputNameValue, email: inputEmailValue,
             course: inputCourseValue , subjects: subjectsList  });
        setInputNameValue('');
        setInputEmailValue('');
        setInputCourseValue('');
        setInputSubjectsValue('');
        setSubjectsList([]);
    }

    return (
        <div className="panel">
            <h2>Add Student</h2>
            <form className="student-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleInputName}
                        value={inputNameValue}
                        placeholder="Enter student name"
                    />
                </div>

                <div className="form-field">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleInputEmail}
                        value={inputEmailValue}
                        placeholder="Enter student email"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="Course">Course:</label>
                    <input
                        type="text"
                        id="course"
                        name="course"
                        onChange={handleInputCourse}
                        value={inputCourseValue}
                        placeholder="Enter student course"
                    />
                </div>
                <div className="form-field">
                    <label htmlFor="Subjects">Subjects:</label>
                    <div className="subject-input-row">
                    <input
                        type="text"
                        id="subjects"
                        name="subjects"
                        onChange={handleInputSubjects}
                        value={inputSubjectsValue}
                        placeholder="Enter student subjects"
                    />
                    <button type="button"
                    className="btn btn-secondary"
                    onClick={handleAddSubject}>Add
                    </button>
                    </div>
                    {subjectsList.length > 0 &&(
                        <ul className="subjects-preview-list">
                            {subjectsList.map((subject , index)=>(
                            <li key={index}>
                                {subject}
                        <button type="button"
                        className="btn-remove" 
                    onClick={()=> handleRemoveSubject(index)}>X</button>
                    </li>
                    ))}
                        </ul>
                    )}
                </div>
                

                <button className="btn btn-primary" type="submit">Add Student</button>
            </form>
        </div>
    );
}

export default AddStudent;