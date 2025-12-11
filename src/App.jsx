import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'; //
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      {/* Navbar would go here */}
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        {/* Add other routes like /collection, /about, /contact, /product/:productId, etc. */}
      </Routes>
    </div>
  )
}

export default App