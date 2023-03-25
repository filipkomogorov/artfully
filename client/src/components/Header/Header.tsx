import React from 'react'
import logoSmall from '/public/logoSmall.png'

const Header = () => {
  return (
    <div className='w-screenWidthLarge mx-auto my-0'>
        <div>
            <img src={logoSmall} alt="logo of artfully" />
        </div>
    </div>
  )
}

export default Header