import React from 'react'
import Navbar from '../components/Navbar'

function PageContent({children}) {
  return (
    <div className="page-content">
        { children }
    </div>
  )
}

export default PageContent