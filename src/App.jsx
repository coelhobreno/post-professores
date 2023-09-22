import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

//firebase
import { onAuthStateChanged } from 'firebase/auth'

//context
import { AuthContextProvider } from './context/AuthContext'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import CreatePost from './pages/CreatePost/CreatePost'
import Search from './pages/Search/Search'
import Post from './pages/Post/Post'

//hooks
import { useAuthentication } from './hooks/useAuthentication'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import EditPost from './pages/EditPost/EditPost'

function App() {

  const { auth } = useAuthentication()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    }) 
  }, [auth])

  if(user === undefined){
    return <p>Carregando...</p>
  }

  return (
     
    <div className="App">
      <AuthContextProvider value={{user}}>
        <BrowserRouter>
            <Navbar/>
            <div className="container">
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/search' element={<Search/>}/>
                <Route path='/post/:id' element={<Post/>}/>
                
                <Route path='/login' element={!user ? <Login/> : <Navigate to="/"/>}/>
                <Route path='/register' element={!user ? <Register/> : <Navigate to="/"/>}/>
                
                <Route path='/dashboard' element={user ? <Dashboard/> : <Navigate to="/login"/>}/>
                <Route path='/post/create' element={user ? <CreatePost/> : <Navigate to="/login"/>}/>
                <Route path='/post/edit/:id' element={user ? <EditPost/> : <Navigate to="/login"/>}/>
              </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
      </AuthContextProvider>
    </div>

  )
}

export default App
