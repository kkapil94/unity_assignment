import React from 'react'
import { useRouteError } from 'react-router-dom'


export default function ErrorComponent() {
    const {status,statusText} = useRouteError()
  return (
    <>
        <div className='flex justify-center space-x-40 items-center h-screen '>
            <div>
                <h1 className='text-[10rem] text-slate-300'>{status}</h1>
                <span className='text-6xl text-slate-500'>{statusText}</span>
            </div>
            <div>
                <img className='h-80' src="/images/404.png" alt="" />
            </div>
        </div>
    </>
  )
}
