import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'


function App() {

  const [ showNav, setShowNav ] = useState(false)

  return (
    <Router>
      <div className="App">
        <header>
          <Header setShowNav={setShowNav} showNav={showNav} />
        </header>
        <div className='root'>
          <aside>
            <Navbar showNav={showNav} />
          </aside>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Dashboard />} />
              <Route path="/statistic" element={<Dashboard />} />
              <Route path="/logout" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
        {/* <footer>
          <Footer />
        </footer> */}
      </div>
    </Router>
  );
}

export default App;
