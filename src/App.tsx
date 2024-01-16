import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Main from './pages/main/Main'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import CreatePost from './pages/createpost/CreatePost'

function App() {

  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/createpost" element={<CreatePost/>}/>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
