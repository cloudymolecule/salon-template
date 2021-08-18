import React from 'react'
import '../styles/Staff.css'
import { StaffList } from '../constants/StaffList'


function Staff() {

    const allStaff = StaffList.map(s => {
        return <div className='staff-member'>
        <h2 className='staff-name'>{s.name}</h2>
        <h4 className='staff-bio'>{s.bio}</h4>
        <img className='staff-image' src={s.image}/>
        </div>
    })

    return (
        <>
            <h1 className='staff-title'>Our Staff</h1>
            <div className='staff-container'>
                <ul className='staff-list'>
                    {allStaff}
                </ul>
            </div>
        </>
    )
}

export default Staff

