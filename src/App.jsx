import { Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import List from "./views/List";
import Detail from "./views/Detail";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/items" element={<List />} />
          <Route path="/items/:id" element={<Detail />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
