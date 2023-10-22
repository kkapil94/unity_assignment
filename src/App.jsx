import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PostDetailScreenPage from './pages/PostDetailScreenPage'


const AppLayout = ()=>{
  return(
    <>
      <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<HomePage/>
      },
      {
        path:":id",
        element:<PostDetailScreenPage/>
      }
    ]
  }
])



export default router
