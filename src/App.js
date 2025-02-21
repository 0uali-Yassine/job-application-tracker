import { BrowserRouter, Route, Routes } from 'react-router';
import './App.css';
import { useGlobalContext } from './Context';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

import Addjobs from './component/Addjobs';
import JobRemaind from './component/JobRemaind';
import ViewAllJobs from './component/ViewAllJobs';
import AddJobForm from './component/AddJobForm';

import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS


function App() {
  const { data } = useGlobalContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='' element={<Addjobs />} />
            <Route path='addjobform' element={<AddJobForm />} />
            <Route path='edite' element={<JobRemaind />} />
            <Route path='viewalljobs' element={<ViewAllJobs />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
