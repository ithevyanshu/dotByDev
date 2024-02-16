import './App.css'

function App() {

  return (
    <>
      <div className="bg-gray-700 px-5 py-3 flex justify-between">
        <a className='text-blue-100 font-bold text-2xl'>{"{ .dot/Dev }"}</a>
        <button className='bg-blue-700 text-blue-100 font-bold px-3 py-1 rounded-md'>Sign In</button>
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white rounded-md">
          <h1 className='text-3xl font-bold'>Sign Up</h1>
          <div className="grid grid-cols-1 gap-3">
            <label>Username</label>
            <input type="text" placeholder='Username' className='border-2 p-2 rounded-md' />
            <label>First Name</label>
            <input type="text" placeholder='First Name' className='border-2 p-2 rounded-md' />
            <label>Second Name</label>
            <input type="text" placeholder='Second Name' className='border-2 p-2 rounded-md' />
            <label>Email</label>
            <input type="email" placeholder='Email' className='border-2 p-2 rounded-md' />
            <label>Contact</label>
            <input type="number" placeholder='Contact' className='border-2 p-2 rounded-md' />
            <label>Password</label>
            <input type="password" placeholder='Password' className='border-2 p-2 rounded-md' />
            <label>Confirm Password</label>
            <input type="password" placeholder='Confirm Password' className='border-2 p-2 rounded-md' />
            <button className='bg-blue-700 text-blue-100 font-bold px-3 py-1 rounded-md'>Sign Up</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
