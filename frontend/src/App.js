import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import Registration from './components/Registration'
import Profile from './components/Profile'
import Messages from './components/Messages'
import Analytics from './components/Analytics'
import Settings from './components/Settings'
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
          <aside>
            <Navbar showNav={showNav} />
          </aside>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/registration" element={<Registration />} />
            </Routes>
          </main>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;
