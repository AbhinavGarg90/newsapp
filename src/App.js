import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>

        <Router>
          <Navbar />
          <Routes>
            <Route path="business" element={<News key="business" pageSize={20} country="in" category="business" />}></Route>

            <Route path="entertainment" element={<News key="entertainment" pageSize={20} country="in" category="entertainment" />}></Route>

            <Route path="/" element={<News key="home" pageSize={20} country="in" category="general" />}></Route>

            <Route path="health" element={<News key="health" pageSize={20} country="in" category="health" />}></Route>

            <Route path="science" element={<News key="scienec" pageSize={20} country="in" category="science" />}></Route>

          </Routes>
        </Router>
      </>
    );
  }
}
