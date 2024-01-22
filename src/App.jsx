// src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import ShowDetails from './components/ShowDetails/ShowDetails';
import BookingForm from './components/BookingForm/BookingForm';
import Home from './components/Home/Home';

function App() {
  return (
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/show/:id" element={<ShowDetails/>} />
        <Route path="/book/:id" element={<BookingForm/>} />
      </Routes>
  );
}

export default App;

