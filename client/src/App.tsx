import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { AuthProvider } from './context/authContext'
import ComingSoon from './pages/templates/ComingSoon'
import Error from './pages/templates/Error'
import Sidebar from './pages/sample/Sidebar'
import Pass from './pages/sample/Pass'
import ProtectedRoutes from './pages/ProtectedRoutes'
import CommentHome from './pages/sample/CommentSection/CommentHome'
import Account from './pages/users/Account'
import CheckBox from './pages/sample/CheckBox'
function App() {
  
  return (
    <>
    <AuthProvider>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='signin' element={<Signin/>}></Route>
      <Route path='login' element={<Signin/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
      <Route path='comingsoon' element={<ComingSoon/>}></Route>
      <Route path='cc' element={<CheckBox/>}></Route>
      <Route path='account' element={
        <ProtectedRoutes>
          <Account></Account>
        </ProtectedRoutes>}>
      </Route>
      <Route path='sidetest' element={<Sidebar/>}></Route>
      <Route path='pass' element={<Pass/>}></Route>
      <Route path='comment' element={<CommentHome/>}></Route>
      <Route path='*' element={<Error/>}></Route>
     </Routes>
     </AuthProvider>
    </>
  )
}

export default App
