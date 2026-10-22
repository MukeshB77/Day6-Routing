import { BrowserRouter, Link, Navigate, NavLink, Route, Routes } from 'react-router'
import About from './about.jsx'
import Home from './home.jsx'
import User from './user.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>

    
      <div className="site-shell">
        <header className="site-header">
          <Link className="brand" to="/home" aria-label="Mukesh's resume home">
            MB<span></span>
          </Link>
          <nav className="site-nav" aria-label="Main navigation">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/user">Skills</NavLink>
          </nav>
        </header>

        <main className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/user" element={<User />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>



    </BrowserRouter>
  )
}

export default App
