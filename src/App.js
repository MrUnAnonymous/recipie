import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import RecipieDetails from './components/RecipieDetails/RecipieDetails'
import { BrowserRouter, Routes , Route, } from 'react-router-dom'

function App() {
  return (
    <div className='appContainer'>
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route path="/:id/information" element={ <RecipieDetails /> } />
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
