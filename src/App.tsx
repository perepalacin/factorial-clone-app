import {
  BrowserRouter as Router,
  Routes, Route, 
} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import Requests from './components/Requests';
import ClockInPage from './components/ClockInPage';


function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Inter:300,400,500,600,700']
      }
    });
   }, []);

  return (
      <div className='main-root'>
        <Sidebar />
        <Router>        
            <Routes>
              <Route path="/dashboard" element={<Home />} />
              <Route path="/inbox" element={<Requests />} />
              <Route path="/clock-in/:yearId/:monthId"  element={<ClockInPage />} />
            </Routes>
          </Router>
      </div>
  )
}

export default App
