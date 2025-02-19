import {Link} from "react-router-dom"

const  Navbar =  () => {
    const userID = "manuel"
    const postID = "1"
    return (
    <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
        <Link to={`/user/${userID}`}>Perfil de usuario</Link>
        <Link to={`/post/${postID}`}>Post de usuario</Link>
    </nav>
    )
}

export default Navbar