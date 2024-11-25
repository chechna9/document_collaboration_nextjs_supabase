import React, { PropsWithChildren } from 'react'

const layout = ({children}:PropsWithChildren) => {
  return (
    <div
    className='h-screen flex justify-center items-center'>{children}</div>
  )
}

export default layout