import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './computent/Header/Header'
import Home from './computent/Home/Home'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogForAns from './computent/BlogForAns/BlogForAns'
function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      
      <Header></Header>
      <hr />
      <Home></Home>
      <BlogForAns></BlogForAns>
      <ToastContainer></ToastContainer>
      
    </div>
  )
}

export default App
