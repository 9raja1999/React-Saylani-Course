import React from 'react'

function StickToTop({children}) {
  return (
    <div className='stickyTop'>
        {children}
    </div>
  )
}

export default StickToTop