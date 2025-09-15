import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./AirBnB web/Header";
import PhotoContainer from "./AirBnB web/PhotoContainer";
import Footer from "./AirBnB web/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SInglePhoto from "./AirBnB web/SInglePhoto";
import Body from "./AirBnB web/Body";
import Photoslist from "./AirBnB web/Photoslist";
import Form from "./AirBnB web/Form";
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Body />}>
          <Route path="/" element={<Photoslist />} />

          <Route path="/another" element={<SInglePhoto />} />
          <Route path="/login" element={<Form/>} />
        </Route>
      </Routes>

      {/* <PhotoContainer/>
      <PhotoContainer/>
      <PhotoContainer/>
      <PhotoContainer/>
      <PhotoContainer/>
      <PhotoContainer/>
      <PhotoContainer/> */}
    </BrowserRouter>
  );
}

export default App;
