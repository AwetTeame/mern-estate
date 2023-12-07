import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import SignUp from "./page/SignUp";
import SignIn from "./page/SignIn";
import About from "./page/About";
import Profile from "./page/Profile";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
