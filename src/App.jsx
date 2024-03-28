import { Outlet, Route, Routes } from "react-router-dom";
import { Header } from "./pages/components";
import Normal from "./pages/normal game/Normal";
import Bonus from "./pages/bonus game/Bonus";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Normal />}>
          {/* <Route /> */}
        </Route>
        <Route path="/bonus" element={<Bonus />}></Route>
      </Routes>
    </main>
  );
}

export default App;
