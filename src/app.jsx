import React from "react";
import "./App.css";
import "./style.scss";
import Popup from "./components/popup";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Page2 from "./components/Page2";

function Card() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="card">
      <nav>
        <ul>
          <li>Aurore</li>
          <li>VALLEIX</li>
          <li>Contact</li>
        </ul>
      </nav>
      <div className="image">
        <img src="./src/assets/avatar.jpg" alt="avatar" />

        <div>
          <h1>let's go for the week! </h1>
          <div className="popup-button">
            <button onClick={() => setButtonPopup(true)}>
              Pensée du jour !
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>
                "Ce n'est pas le plus fort ni le plus rapide qui aura du succés,
                mais celui qui n'abandonne pas"
              </h3>
            </Popup>
          </div>
        </div>
      </div>
      <div className="text">
        <p>A vos côtés pour traverser les emotions de cette semaine !</p>
        <p>
          Mais pour toute aide technique cliquez
          <Link to="/Page2">
            <button className="appel">ici</button> !
          </Link>
        </p>
      </div>
    </div>
  );
}

export function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/Page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}
