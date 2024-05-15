import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GetAllPatientComponent from './components/GetAllPatientComponent/GetAllPatientComponent';
import AddNewPatientComponent from './components/AddNewPatientComponent/AddNewPatientComponent';
import EditNewPatientComponent from './components/EditNewPatientComponent/EditNewPatientComponent';
import DeleteNewPatientComponent from './components/DeleteNewPatientComponent/DeleteNewPatientComponent';

function App() {
  return (
    <Router>
            <div className="container">
              <h1>Hospital Management App</h1>
              
            <nav className="nav-menu">
                <Link to="/" >HOME</Link>
                <Link to="/admin/add" >ADD PATIENT</Link>
                <Link to="/admin/edit" >EDIT PATIENT</Link>
                <Link to="/admin/delete" >DELETE PATIENT</Link>
            </nav>
           <Routes>
                 <Route exact path='/' element={<GetAllPatientComponent/>}></Route>
                 <Route path='/admin/add' element={<AddNewPatientComponent/>}></Route>
                 <Route path='/admin/edit' element={<EditNewPatientComponent/>}></Route>
                 <Route path='/admin/delete' element={<DeleteNewPatientComponent/>}></Route>
          </Routes>
          </div>
       </Router>
  );
}

export default App;
