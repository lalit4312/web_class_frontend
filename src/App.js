import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import Navbar from './components/Navbar';
import Registerpage from './pages/registerpage/Registerpage';
import Loginpage from './pages/loginpage/Loginpage';
import AdminDashboard from './pages/admin/AdminDashboard';

//toast config
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Registerpage />} />
        <Route path='/login' element={<Loginpage/>} />
        {/* Admin Routes */}
        <Route path='/admin/dashboard' element={<AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}
export default App;
