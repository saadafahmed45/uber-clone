import React from 'react'
// import { FaCar } from "react-icons/fa";

const InputItem = () => {
    return (
        <div className='bg-slate-200 p-2 flex items-center gap-4 rounded-md mt-3 '>
            {/* <FaCar /> */}
            <h2>img</h2>
            <input type="text" placeholder='pickup Location' />
        </div>
    )
}

export default InputItem