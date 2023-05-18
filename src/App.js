import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Album from "./pages/Album/Album";
import Photos from "./pages/Photos/Photos";

function App(props) {
  return (
    <div className="app">
      <Routes>
        <Route basename="/react-pages-hw52" path="/" element={<Main />} />
        <Route path="users/:userId/albums" element={<Album />} />
        <Route path=":albumId/photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
