import Start from '../page/Start'
import Expert from '../page/ExpertList'
import Write from '../page/Write'
import Message from '../page/Message/Message'
import Success from '../page/Success/Success'
import { createBrowserRouter } from 'react-router-dom'
const router=createBrowserRouter([
    {
        path: '/',
        element:<Start/>
    },
    {
        path: '/expertList',
        element:<Expert/>
    },
    {
        path: '/write',
        element:<Write/>
    },
    {
        path: '/message/:name',
        element:<Message/>
    },
    {
        path: '/success',
        element:<Success/>
    }
])
export default router;