import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../contenedores/Home';
//import Contacto from '../contenedores/Contacto';
import Layout from '../componentes/Layout';
//import Somos from '../contenedores/Somos';
import Pokemones from '../contenedores/Pokemones';
import Pokemon from '../contenedores/pokemon';
import UsarContexto from '../contexto/UsarContexto';
import Favoritos from '../contenedores/Favoritos';
import '../App.css'

function App() {
    return (   
    
        <BrowserRouter>
            <UsarContexto>
                <Layout> 
                    <Routes>
                    
                        <Route path="/" element={<Home />}> </Route>
                        <Route path="/pokemones" element={<Pokemones />}> </Route>
                        <Route path="/pokemones/*" element={<Pokemon />}> </Route>
                        <Route path="/Favoritos" element={<Favoritos />}> </Route>
                        
                        
                    </Routes>
                </Layout>
            </UsarContexto>
        </BrowserRouter>

    );
}

export default App;