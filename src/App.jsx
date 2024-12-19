import { useSelector } from "react-redux";
import Header from "./components/Header";
import Button from "./components/Button";
import { useState } from "react";
import Alert from "./components/Alert";
import { Route, Routes } from "react-router-dom";
import Normal from "./components/Normal";
import Bonus from "./components/Bonus";
import SecondStep from "./pages/SecondStep";
function App() {
  const { gametype } = useSelector((s) => s.data);
  const [alertState, setAlertState] = useState(false);
  return (
    <main className="w-screen h-screen flex flex-col items-center py-10 px-5 relative bg-gradient-to-b from-background-first to-background-last overflow-hidden font-principle">
      <Header />
      <Routes>
        <Route
          path="/"
          element={gametype === "normal" ? <Normal /> : <Bonus />}
        />
        <Route path="second-step" element={<SecondStep />} />
      </Routes>
      <Button buttonClick={() => setAlertState((curr) => !curr)} />
      {alertState && <Alert onClick={() => setAlertState((curr) => !curr)} />}
    </main>
  );
}

export default App;
