import {
  BrowserRouter as Router,
  Routes, Route, Link
} from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Home from './components/Home'

function App() {

  return (
      <div className='main-root'>
        <Sidebar />
        <Router>        
            <Routes>
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </Router>
      </div>
  )
}

export default App
