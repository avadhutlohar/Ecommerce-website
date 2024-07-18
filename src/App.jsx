import { Link, Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";
import Create from "./components/Create";

function App() {
  const { search, pathname } = useLocation();
  return (
    <>
      <div className="w-screen h-screen flex">
        {(pathname != "/" || search.length > 0) && (
          <Link to="/" className="absolute left-[17%] top-[3%] text-blue-300">
            Home
          </Link>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
