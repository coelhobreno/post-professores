import { BrowserRouter, Routes, Route } from 'react-router-dom'

//CSS Global
import GlobalStyles from './styles/GlobalStyles'

import './App.css'

//firebase
import { onAuthStateChanged } from 'firebase/auth'

//context
import { AuthContextProvider } from './context/AuthContext'
import { InsertContextContAreaProvider } from './context/InsertContextContArea'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'

//pages
import Home from './pages/Home/index'
import About from './pages/About/index'
import Search from './pages/Search/index'
import Post from './pages/Post/index'
import Login from './pages/Login/index'
import Register from './pages/Register/index'
import Dashboard from './pages/Dashboard/index'
import CreatePost from './pages/CreatePost/index'
import EditPost from './pages/EditPost/index'

//hooks
import { useAuthentication } from './hooks/useAuthentication'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

//components
import { BoxLoading } from './components/Others/Loading'

import Fade from './components/Fade'

function App() {

  const { auth } = useAuthentication()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    }) 
  }, [auth])

  if(user === undefined){
    return <BoxLoading/>
  }

  return (
     
    <div className="App" id='App'>
      <Fade />
      <InsertContextContAreaProvider>
        <AuthContextProvider value={{ user }}>
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
      </InsertContextContAreaProvider>

      <GlobalStyles/>
    </div>

  )
}

export default App
