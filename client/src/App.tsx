import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { AuthProvider } from './context/authContext'

function App() {
  
  return (
    <>
    <AuthProvider>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='signin' element={<Signin/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
     </Routes>
     </AuthProvider>
    </>
  )
}

export default App
