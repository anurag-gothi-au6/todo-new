import React from 'react'
import picture from '../assest/images.jpeg'
const User = () => {
    return (
        <div className='user'>
            <img style={{float:"right",height:'50px',width:'50px',borderRadius:'50%'}} src={picture} alt='avatar'></img>

            <h2 >Hello Floyd Mullins</h2>
            <p className='grey'>you have 3 tasks</p>
        </div>
    )
}

export default User
