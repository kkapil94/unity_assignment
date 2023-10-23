import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../components/Loader'

export default function PostDetailScreenPage() {

  const {id} = useParams()
  const [postData,setPostData] = useState(null)

  const fetchPostData = async()=>{
    const {data} = await axios.get(`http://hn.algolia.com/api/v1/items/${id}`)
    console.log(data);
    setPostData(data)
  }

  useEffect(()=>{
    fetchPostData()
  },[id])

  return (
    <>
       { !postData?<Loader/>:<div className='flex flex-col items-center mt-20'>
          <h1 className='text-3xl text-slate-50'>{postData?.title}</h1>
          <div><div className='underline decoration-wavy text-transparent decoration-slate-500'>nothinfor</div></div>
          <div className='my-16'>
            <span className='text-3xl text-slate-50'><strong>Points:</strong> {postData.points}</span>
          </div>
          <div>
            <h1 className='text-3xl text-slate-50 underline text-center decoration-slate-200'>Comments</h1>
            <div className='flex justify-center mt-16'>
              <ul className='w-3/5'>
                {
                  postData?.children?.map(item=>(
                    <li className='list-disc text-slate-300 mb-4'>{item.text}</li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>}
    </>
  )
}
