import './App.css'
import Allcard from "./components/cards/Allcards";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topguest from './components/navbar/Topguest'
import Navbar from './components/navbar/Navbar'
import HotelDetails from './components/hoteldetails/Hoteldetails'


function App() {
  return (
    <div className="App">
      <Topguest />
      <Navbar />

      <Router>
        <Routes>
          <Route path="/" element={<Allcard />} />
          <Route path="/hotel-details/:hotelId" element={<HotelDetails />} />
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
