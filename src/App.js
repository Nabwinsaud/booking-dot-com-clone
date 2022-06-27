import Home from "./home/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        {/* <Home /> */}
      </Routes>
    </div>
  );
}

export default App;
