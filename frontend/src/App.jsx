import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import AddStudentPage from './pages/AddStudentPage';
import StudentListPage from './pages/StudentListPage';

const API_URL = import.meta.env.VITE_API_URL;

function App() {
const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetchStudents();
  }, []);



  const fetchStudents = async () => {
    try {
      const res = await axios.get(API_URL);
      setStudents(res.data);
    } catch (error) {
      console.error('Failed to fetch students:', error);
    } finally {
      setLoading(false);
    }
  };



const onAddStudent = async (student) => {
    const res = await axios.post(API_URL, student);
    setStudents([res.data, ...students]);
  };

 const onDeleteStudent = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    setStudents(students.filter((student) => student._id !== id));
  };

 const onUpdateStudent = async (id, name, email) => {
    const res = await axios.put(`${API_URL}/${id}`, { name, email });
    setStudents(students.map((student) =>
      student._id === id ? res.data : student
    ));
  };


  return (
    <div className="app-shell">
      <header className="app-header">
        <h1 className="app-title">Student Management System</h1>
        <Navbar />
      </header>

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home studentCount={students.length} />} />
          <Route
            path="/add-student"
            element={<AddStudentPage onAddStudent={onAddStudent} />}
          />
          <Route
            path="/students"
            element={
              <StudentListPage
                students={students}
                onDeleteStudent={onDeleteStudent}
                onUpdateStudent={onUpdateStudent}
              />
            }
          />
          <Route path="*" element={<h2 className="page-not-found">Page not found</h2>} />
        </Routes>
      </main>
    </div>
  )
};

export default App;
