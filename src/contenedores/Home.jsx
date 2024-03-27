import { Link } from "react-router-dom";

function Home() {
    return (<><img src="src/assets/logo.png" alt="" className="logo" />
    <Link to="/pokemones" className="botonfav">ENTRAR</Link>
    </> );
}

export default Home;