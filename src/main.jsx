import App from './App.jsx'
import { createRoot } from 'react-dom/client'
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import AsteroidsPage from "./Pages/AsteroidsPage.jsx";
import DestructionPage from "./Pages/DestructionPage.jsx";
import Header from "./Components/Header.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="asteroids" element={<AsteroidsPage/>}/>
            <Route path="destruction" element={<DestructionPage/>}/>
        </Routes>

    </BrowserRouter>
)
