import React from 'react'

const Navbar = () => {
    return (
        <nav className='shadow h-16 flex justify-between bg-black text-white px-24 py-2 items-center'>
            <div className="flex justify-between items-center gap-5 ">
                <h2 className='logo text-3xl font-semibold mr-2'>Uber</h2>
                <ul className='link_item flex gap-5 text-lg  items-center'>
                    <li> <a href="3">Home</a></li>
                    <li> <a href="3">Need</a></li>
                    <li> <a href="3">Ride</a></li>
                    <li> <a href="3">About</a></li>
                </ul>
            </div>

            <ul className='link_item flex gap-3 text-lg  items-center'>
                <li> <a href="3">En</a></li>
                <li> <a href="3">Help</a></li>
                <li className=' bg-white text-black p-1 rounded-xl' > <a href="3">Signup</a></li>
            </ul>
        </nav>
    )
}

export default Navbar