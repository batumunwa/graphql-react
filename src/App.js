import { Link, Route, Routes } from "react-router-dom";
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container">
       <div class="navbar navbar-dark bg-primary">
       <Link to="/" className="navbar-brand">Home</Link>
      </div>
     <div className="col-md-12">
     <h1>React Appollo GraphQL</h1>
     <hr/>
     <Routes>
      <Route
         path="/"
         element={<Home />}
      />
      <Route
         path="/:id"
         element={<Details />}
      />
     </Routes>
     </div>
    </div>
  );
}

export default App;
