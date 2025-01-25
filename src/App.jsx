import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./screens/Home"
import LoginPage from "./screens/auth/Login"
import Signup from "./screens/auth/Signup"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}


