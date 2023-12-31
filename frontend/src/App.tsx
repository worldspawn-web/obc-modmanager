import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, Suspense } from "react";
import { Spinner } from "react-bootstrap";

import Home from "./pages/Home";
import ActiveMods from "./pages/ActiveMods.tsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  // TODO: FIX SUSPENSE
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner animation="grow" />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="active" element={<ActiveMods />} />
          {/* <Route path="disabled" element={<DisabledMods />} />
          <Route path="testing" element={<TestingMods />} />
          <Route path="declined" element={<DeclinedMods />} />
          <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
