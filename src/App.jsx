import './styles/index.css'
import Login from './features/auth/Login.jsx'
import Landing from './features/pages/Landing.jsx'
import { useState } from 'react'
import Header from "./components/Header.jsx"

function App () {
  return (
    <>
      <div className='flex flex-col font-[roboto]'>
        <Header />
        <div className='flex justify-start gap-[3rem] p-3 m-[2rem]'>
          <Landing />
        </div>
      </div>
    </>
  );
}

export default App;