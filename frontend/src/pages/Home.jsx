import { Link } from 'react-router-dom';

function Home({ studentCount }) {
    return (
        <div className="home-card panel">
            <h2>Home</h2>
            <p className="home-summary">You have {studentCount} student(s) registered.</p>
            <Link to="/add-student" className="primary-link">Add a new student</Link>
        </div>
    );
}

export default Home;