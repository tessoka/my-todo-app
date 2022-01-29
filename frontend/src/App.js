import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'
import Login from './components/Login'
import axios from 'axios'
import { backendUrl } from './utility/ServerUrl'
import { ThemeContext } from './utility/Context'


function App() {

  const [ showNav, setShowNav ] = useState(false)
  const [ sessionToken, setSessionToken ] = useState(localStorage.getItem("sessionToken"))
  const [ themeColor, setThemeColor ] = useState("")

  const identifyUser = async () => {
    try {
      const res = await axios.post(backendUrl + "/serialize", { sessionToken: localStorage.getItem("sessionToken") })
      console.log(res.data)
      localStorage.setItem("sessionToken", res.data.sessionToken)
      localStorage.setItem("noOfVisits", res.data.noOfVisits)
      if (res.data.noOfVisits === 1) {
        setThemeColor("light")
        localStorage.setItem("themeColor", "light")
      } else {
        setThemeColor(localStorage.getItem("themeColor"))
      }
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    console.log("useEffect was called")
    console.log(sessionToken)
    identifyUser()
  }, [])

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <Router>
        <div className={themeColor === "dark" ? "App dark" : "App"}>
          <header>
            <Header setShowNav={setShowNav} showNav={showNav} />
          </header>
          <div className="root">
            <aside>
              <Navbar showNav={showNav} />
            </aside>
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
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
    </ThemeContext.Provider>
  );
}

export default App;
