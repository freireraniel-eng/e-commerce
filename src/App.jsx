import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

function App() {
    return(
        <BrowserRouter>
            <Header/>
                <main>
                     <Routes>
                        <Route path="/" element={<Home/>}/>
                         <Route path="/produtos" element={<p>Product</p>}/>
                         <Route path="/login" element={<p>Login</p>}/>
                        <Route path="/carrinho" element={<p>Carrinho</p>}/>
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}
export default App