import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import List from "./views/List";
import Detail from "./views/Detail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/items" element={<List />} />
        <Route path="/items/:id" element={<Detail />} />
      </Route>
    </Routes>
  );
}

export default App;
