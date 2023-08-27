import React, { useRef, useState } from 'react'

const NavBar = ({ getListRoom }) => {
    const [isOpenCreateModal, setIsOpenCreateModal] = useState(false)
    const [isOpenFindModal, setIsOpenFindModal] = useState(false)
    const [roomName, setRoomName] = useState('')
    const [roomNumber, setRoomNumber] = useState('')
    const [listRoom, setListRoom] = useState([])

    function handleModal() {
        setRoomName(undefined)
        setIsOpenCreateModal(!isOpenCreateModal)
    }
    function handleSubmitRoomName(event) {
        event.preventDefault()
        if (!roomName) {
            return
        } else {
            const updatedRoomList = [...listRoom, roomName];
            setListRoom(updatedRoomList)
            setIsOpenCreateModal(false)
            getListRoom(updatedRoomList)
        }
    }

    function CreateRoomModal() {
        return (
            <form onSubmit={(e) => handleSubmitRoomName(e)}>
                <div className="fixed inset-0 bg-gray-400 bg-opacity-20 backdrop-blur-sm" />
                <div className="fixed inset-0">
                    <div className="flex min-h-full items-center justify-center ">
                        <div className="transform rounded-lg bg-white shadow-xl  sm:w-full max-w-lg">
                            <div className="p-6 pb-6 ml-4">
                                <span className="font-semibold ">Create a room</span>
                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={handleModal}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>
                                </button>
                                <input type="text" placeholder='Enter room name..' className='p-3 mt-3 border-[1px] border-[#CFD3D4] w-full h-full outline-none rounded-[8px] px-3' onChange={(e) => setRoomName(e.target.value)} />
                            </div>
                            <div className="px-6 pb-5 flex justify-center">
                                <button type='submit' className="rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700 ">Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
    function FindRoomModal() {
        return (
            <form onSubmit={(e) => handleSubmitRoomName(e)}>
                <div className="fixed inset-0 bg-gray-400 bg-opacity-20 backdrop-blur-sm" />
                <div className="fixed inset-0">
                    <div className="flex min-h-full items-center justify-center ">
                        <div className="transform rounded-lg bg-white shadow-xl  sm:w-full max-w-lg">
                            <div className="p-6 pb-6 ml-4">
                                <span className="font-semibold ">Find a room</span>
                                <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => setIsOpenFindModal(false)}>
                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" /></svg>
                                </button>
                                <input type="text" placeholder='Enter room number..' className='p-3 mt-3 border-[1px] border-[#CFD3D4] w-full h-full outline-none rounded-[8px] px-3'
                                    onChange={(e) => setRoomNumber(e.target.value)} />
                            </div>
                            <div className="px-6 pb-5 flex justify-center">
                                <button type='submit' className="rounded-md bg-green-600 px-3 py-2 text-sm text-white hover:bg-green-700 ">Find</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className='bg-blue-300 h-14 flex w-full items-center '>
            <h1 className='text-[20px] w-full pl-10'>Chat box</h1>
            <div className='w-full flex justify-end gap-6 pr-8'>
                <button className='border p-[3px] rounded-md text-white  bg-green-600' onClick={handleModal}>Create room</button>
                <button className='border p-[3px] rounded-md text-white bg-black' onClick={() => setIsOpenFindModal(prevState => !prevState)}> Find Room</button>
            </div>
            {isOpenCreateModal && CreateRoomModal()}
            {isOpenFindModal && FindRoomModal()}
        </div>
    )
}

export default NavBar;