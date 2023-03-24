import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";


function App() {
  return (
    <>
      {/* <h1 className="mt-5 text-center">Shree Ganeshay Namah</h1> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About/>} />
          <Route path='/resources' element={<Resources/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/calculator' element={<Calculator/>} />
          <Route path='/*' element={<Home/>}/>
        </Routes>
      </BrowserRouter >
    </>


  );
}

export default App;
