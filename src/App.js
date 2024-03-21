import './App.css';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import RecipieDetails from './components/RecipieDetails/RecipieDetails'
import { BrowserRouter, Routes , Route,} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/recipie" element={ <RecipieDetails /> } />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
