import { Link } from "react-router-dom";
function Header() {
    return ( <header>
        <nav>
            <Link to={"/"} className="itemnav">Home</Link> <Link to={"/Pokemones"}>Pokemones</Link> <Link to={"/Favoritos"}>Favoritos</Link>
        </nav>
    </header> );
}

export default Header;