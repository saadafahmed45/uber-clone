import React from 'react'
import InputItem from './InputItem'

const SearchSection = () => {
    return (
        <div className='shadow p-5 rounded-xl'>
            <p className='text-lg font-bold'>Get a ride </p>
            <InputItem />
            <InputItem />
        </div>
    )
}

export default SearchSection