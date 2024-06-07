import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Fely from './components/pages/Fely';
import Jerry from './components/pages/Jerry';
import AboutUs from './components/pages/AboutUs';
export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/fely" element={<Fely />} />
                <Route path="/jerry" element={<Jerry />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    )
}