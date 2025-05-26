// import { Dashboard } from "./pages/dashboard";
import { Dashboard } from "./pages/dashboard";
import { Login } from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
 return(
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>

   //  <Dashboard/>
 )
}

export default App
