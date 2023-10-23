import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'

export default function Loader() {
  return (
    <>
        <div className='h-screen flex items-center justify-center '>
            <InfinitySpin
                width='200'
                color="rgb(248 250 252)"
            />
        </div>
    </>
  )
}
