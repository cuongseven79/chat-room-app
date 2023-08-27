import React from 'react'

const RegisterPage = () => {
  return (
    <div className='flex w-[100vw] h-[100vh] sm:justify-center'>
      <div className='lg:w-[40%] w-full h-full p-10 '>
        <form className=' h-full flex flex-col gap-4 py-40 px-20'>
          <h1 className='font-["Open_Sans"] font-[600] text-[18px]'>Register</h1>
          <p className='font-["Open_Sans"] font-[300] text-[16px]'>Register to start using messaging!</p>
          <div className='flex flex-col justify-start text-[13px] gap-2 w-full'>
            <span className='font-[500] '>Username</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your username...' />
          </div>
          <div className='flex flex-col justify-start text-[13px] gap-2 w-full'>
            <span className=''>Email</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your email...' />
          </div>
          <div className='flex flex-col justify-start text-[13px] gap-2 w-full'>
            <span className=''>Password</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your password...' />
          </div>
          <div className='flex flex-col justify-start text-[13px] gap-2 '>
            <span>Confirm Password</span>
            <input
              className='px-3 outline-none rounded-[5px] bg-[#F8F8F9] border h-[40px]'
              type="text"
              placeholder='Enter your confirm password...' />
          </div>
        </form>
      </div>
      <div className='bg-blue-300 lg:w-[60%]'></div>
    </div>
  )
}

export default RegisterPage