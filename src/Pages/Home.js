import React from 'react'

function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', backgroundColor: '#333' }}>
      <h1 style={{ color: 'white', marginBottom: '1em' }} className='text'>Welcome to Home Page</h1>
      <img style={{ width: '700px', height: '400px' }} alt='garage' src='https://www.mysmartgarage.in/static/media/7.6d9ecdda.png' />
    </div>
  )
}

export default Home
