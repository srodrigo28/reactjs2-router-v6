import "./NavBar.css"
import { Link } from "react-router-dom";

export function NavBar(){
    return(
        <ul>
         
            <li>
                <Link to="/home" >Home</Link>
                <Link to="/cursos" >Cursos</Link>
                <Link to="/treinamentos" >Treinamentos</Link>
            </li>
        </ul>
    )
}