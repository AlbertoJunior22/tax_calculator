import './App.css';
import { ApplicationRoutes } from './Routes';
import { Container } from './components/Container';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <ApplicationRoutes />
      </Container>
    </div>
  );
}

export default App;
