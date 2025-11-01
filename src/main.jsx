import {createRoot} from 'react-dom/client'
import './App.css'
import {BrowserRouter} from "react-router";

import Header from "./Components/Header.jsx";
import Footer from "./Components/Footer.jsx";
import AsteroidData from "./AsteroidData.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <AsteroidData/>
        <Footer/>
    </BrowserRouter>
)
