import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './views/Layout';
import List from './views/List';
import Detail from './views/Detail';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import 'react-loading-skeleton/dist/skeleton.css';
import './styles/App.scss';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster richColors position='top-right' />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/items' element={<List />} />
          <Route path='/items/:id' element={<Detail />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
