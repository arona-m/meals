import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppProvider } from './context';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container className='my-2'>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
