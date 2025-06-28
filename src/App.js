import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieInfo from "./pages/MovieInfo";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        {/* Use <Routes> and 'element' prop with React Router v6 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          {/* Use :id for dynamic routing and pass it via useParams in MovieInfo */}
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;