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
import Themecontext from './componets/ThemeContext'


function App() {
  const [count, setCount] = useState(0)


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


