import { ChakraProvider } from '@chakra-ui/react'
import './App.css';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <ChakraProvider>
      <TodoPage />
    </ChakraProvider>
  );
}

export default App;
