import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Intro from './components/Intro'
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

  const [ sessionToken, setSessionToken ] = useState(localStorage.getItem("sessionToken"))
  const [ themeColor, setThemeColor ] = useState("")
  const [ isNavOpen, setIsNavOpen ] = useState(JSON.parse(localStorage.getItem("isNavOpen")))

  const identifyUser = async () => {
    try {
      const res = await axios.post(backendUrl + "/serialize", { sessionToken: localStorage.getItem("sessionToken") })
      console.log(res.data)
      localStorage.setItem("sessionToken", res.data.sessionToken)
      localStorage.setItem("noOfVisits", res.data.noOfVisits)
      if (res.data.noOfVisits === 1) {
        setThemeColor("light")
        setIsNavOpen(true)
        localStorage.setItem("isNavOpen", true)
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
        
        <Intro />

        <div className={themeColor === "dark" ? "App dark" : "App"}>
          <aside>
            <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
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
