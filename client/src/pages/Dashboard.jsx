import React, { Fragment, useState } from 'react'
import Header from '../components/NavBar'
import { v4 as uuid } from "uuid";
import ModalTool from '../components/modalTool';

const items = Array(100).fill({
  id: '001',
  title: 'room 1',
})
const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState()
  const [roomName, setRoomName] = useState('')
  const [listRoom, setListRoom] = useState([])

  const getListRoom = (listRoom) => {
    setListRoom(listRoom)
  }
  const handleChatRoom = (value, index) => {
    console.log(value);
    setRoomName(value)
    setCurrentIndex(index)
  }

  function ChatRoom() {
    return (
      <div className='flex flex-col justify-around h-full'>
        <div className='p-4 pr-8 text-end text-[20px] bg-slate-400'>{roomName}</div>
        <div className='border bg-blue-100 overflow-auto h-full'>
          <div className='p-4'>
            {Array(124).fill(
              <p className='p-2'><b>Gia Cường:</b> e dis. Deserunt dictum nulla proin duDeserunt dictum nulla proin duDeserunt dictum nulla proin duDeserunt dictum nulla proin dui voluptatem, ac eos, rutrum et? Mollit. Nihil</p>
            )}
          </div>
        </div>
        <div className='flex gap-1 items-center'>
          <input
            type="text"
            placeholder='Enter your text...'
            className='w-full h-[70px] border outline-none px-3 relative' />
          <button type='text' className='rounded-[5px] bg-blue-600 hover:bg-blue-700 outline-none text-white absolute right-0 p-2 px-8 mx-2'>Send</button>
        </div>
      </div>
    )
  }

  function NotFound() {
    return (
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-gray-800 font-bold text-2xl">
                  Looks like you've found the
                  doorway to the great nothing
                </h1>
                <p class="my-2 text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
      )
    }
  return (
    <Fragment>
      <div className='flex h-[100vh]'>
        <div className='w-[30%]'>
          <Header getListRoom={getListRoom} />
          <div className='h-full overflow-auto'>
            {listRoom.map((room, index) =>
              <div key={index}
                className={`${currentIndex === index ? 'bg-slate-400' : ''} p-4 pl-7 border-b hover:bg-slate-400 cursor-pointer`}
                onClick={() => handleChatRoom(room, index)}
              >{room}
              </div>
            )}
          </div>
        </div>
        <div className='w-[70%] border-l-[1px]'>
          {roomName ? <ChatRoom /> : NotFound()}
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard;