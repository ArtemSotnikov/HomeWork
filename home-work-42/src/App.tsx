import './App.css'
import Home from "./Components/Home.tsx";
import About from "./Components/About.tsx";
import Contact from "./Components/Contact.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router";
import Team from "./Components/Team.tsx";
import CompanyHistory from "./Components/CompanyHistory.tsx";

function App() {

  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home/>}/>

            <Route path="/about" element={<About />}>
                <Route path="team" element={<Team />} />
                <Route path="history" element={<CompanyHistory />} />
            </Route>

            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
  )
}

export default App
