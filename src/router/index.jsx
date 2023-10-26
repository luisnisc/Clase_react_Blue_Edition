import { createBrowserRouter } from "react-router-dom";
import Examen from "../Examen";
    import App from "../App";
import Error404 from "../Error404";
import Layout from "../Layout";
import Asignaturas from "../Asignaturas";
import AboutPage from "../components/About";
const router = createBrowserRouter([
{
    element:<Layout/>,
    children:[
        {
            path:'/:loc',
            element: <App/>
        },
        
        {
            path : '/examenes/:loc',
            element: <Examen/>,
        },
        {
            path : "*",
            element:<Error404/>
        },
        {
            path : "/asignaturas/:loc",
            element:<Asignaturas/>,
        },
        {
            path: "/about/:loc",
            element:<AboutPage/>,
        }



    ]
}
])
export default router;