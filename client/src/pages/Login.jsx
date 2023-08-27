import React, { useState } from 'react'

const LoginPage = () => {
  const [data, setData] = useState({
    username: '',
    password: ''
  });


  const handInputOnChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value })
  }
  const handleSubmitForm = (e) => {
    e.preventDefault();

  }

  return (
    <div className='flex w-[100vw] h-[100vh] sm:justify-center'>
      <div className='lg:w-[40%] w-full h-full p-10 '>
        <form onSubmit={handleSubmitForm} className=' h-full flex flex-col gap-4 py-40 px-20'>
          <h1 className='font-["Open_Sans"] font-[600] text-[18px]'>Login</h1>
          <p className='font-["Open_Sans"] font-[300] text-[16px]'>Sign in to start using messaging!</p>
          <div className='flex flex-col justify-start text-[13px] gap-2 w-full'>
            <span className='font-[500] '>Username</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your username...'
              onChange={handInputOnChange}
            />
          </div>
          <div className='flex flex-col justify-start text-[13px] gap-2 w-full'>
            <span className=''>Password</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your password...'
              onChange={handInputOnChange}
            />
          </div>
          <button type='submit'></button>
        </form>
      </div>
      <div className='bg-blue-300 lg:w-[60%]'></div>
    </div>
  )
}

export default LoginPage