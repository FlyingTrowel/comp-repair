import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { useRoutes } from 'react-router-dom';
import routes from './auth/routes';

function App() {

  const routing = useRoutes(routes)

  return (
    <ChakraProvider>
      {routing}
    </ChakraProvider>
  );
}

export default App;
