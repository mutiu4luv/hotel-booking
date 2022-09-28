import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import Mutiu from "./components/Mutiu";
import BookingScreen from "./Screens/BookingScreen";

import HotelDetails from "./Screens/HotelDetails";
import LoginScreen from "./Screens/LoginScreen";

// import Cars from "./cards/Cars";

function App() {
  // const user = localStorage.getItem(User);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/hotels/:id" element={<HotelDetails />} />
        <Route path="/mmutiu" element={<Mutiu />} />
        <Route path="/loginScreen" element={<LoginScreen />} />
        <Route path="/bookingscreen" element={<BookingScreen />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
