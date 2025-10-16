import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './componets/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About us'
import Contact from './pages/Contact'
import OurService from './pages/OurService'
import PageNotFound from './pages/PageNotFound'
import Footer from './componets/Footer'
import CounterPage from './pages/CounterPage'
import Test from './pages/Test'
import { createContext, useContext } from 'react'


function App() {
  const [count, setCount] = useState(0)
  const ThemeContext = createContext()

  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }
  theme === 'light'
    ? (document.body.style.backgroundColor = 'white')
    : (document.body.style.backgroundColor = '#333')


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ minHeight: '100vh', color: theme === 'light' ? '#000' : '#fff' }}>
        <button
          onClick={toggleTheme}
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            background: theme === 'light' ? '#333' : '#fff',
            color: theme === 'light' ? '#fff' : '#333',
            cursor: 'pointer',
            zIndex: 1000,


          }}
        >
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        {/* The rest of your app */}
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About us' element={<About />} />
            <Route path='/Services' element={<OurService />} />
            <Route path='*' element={<PageNotFound />} />
            <Route path='/Counter' element={<CounterPage />} />
            <Route path='/Test' element={<Test />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )









  return (
    <>
      <Navbar></Navbar>

      <Router>

        <Routes>

          <Route path='/' element={<Home></Home>} />

          <Route path='/Contact' element={<Contact></Contact>}></Route>
          <Route path='/About us' element={<About></About>}></Route>
          <Route path='/Services' element={<OurService />} />
          <Route path='*' element={<PageNotFound />} />
          <Route path='/Counter' element={<CounterPage />}></Route>
          <Route path='/Test' element={<Test />}></Route>


        </Routes>


      </Router>







      <Footer></Footer>

    </>
  )
}


export default App


