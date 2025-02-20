import {Link} from "react-router-dom"

const  NavbarNo =  () => {
    const userID = "1"
    return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to={`/new/${userID}`}> Ver Noticia</Link>
    </nav>
    )
}

export default NavbarNo