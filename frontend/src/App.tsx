import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ActiveMods from "./pages/ActiveMods.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="active" element={<ActiveMods />} />
        {/* <Route path="disabled" element={<DisabledMods />} />
          <Route path="testing" element={<TestingMods />} />
          <Route path="declined" element={<DeclinedMods />} />
          <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
