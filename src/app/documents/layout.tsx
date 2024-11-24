import React, { PropsWithChildren } from 'react'
import Navbar from './components/navbar'

const DocumetnsLayout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default DocumetnsLayout