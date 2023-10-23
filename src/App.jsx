import { Outlet, createBrowserRouter } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import PostDetailScreenPage from './pages/PostDetailScreenPage'
import ErrorComponent from './components/ErrorComponent'


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
    errorElement:<ErrorComponent/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
        errorElement:<ErrorComponent/>
      },
      {
        path:":id",
        element:<PostDetailScreenPage/>,
        errorElement:<ErrorComponent/>
      }
    ]
  }
])



export default router
