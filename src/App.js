import { Route, Routes } from "react-router-dom";
import Main from "./components/HeroSection";
import Slider from "./components/Slider";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route
          path="/info/:id"
          element={
            <div style={{ overflow: "hidden" }}>
              <Slider />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
