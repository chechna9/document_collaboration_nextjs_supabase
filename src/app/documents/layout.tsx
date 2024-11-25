import React, { PropsWithChildren } from 'react'
import Navbar from './components/navbar'

const DocumetnsLayout = ({children}:PropsWithChildren) => {
  return (
    <div className='p-4'>
        <Navbar/>
        {children}
    </div>
  )
}

export default DocumetnsLayout