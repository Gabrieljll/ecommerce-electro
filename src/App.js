import { Navbar } from './components/NavBar/NavBar';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

function App() {
	return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={ <ItemListContainer greeting="Bienvenidos"/> }/>
                    <Route path="/productos/:categoryId" element={ <ItemListContainer greeting="Bienvenidos"/> }/>
                    <Route path="/detail/:itemId" element={ <ItemDetailContainer itemId={10}/> }/>
                    <Route path="*" element={ <Navigate to={"/"}/> }/>
                </Routes>
            </div>
        </BrowserRouter>
	);
}

export default App;
