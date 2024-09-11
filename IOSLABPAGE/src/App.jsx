import React from 'react';
import Navbar from './Navbar';
import TextSection from './TextSection';
import './App.css'; // Estilos generales
import './Navbar.css';
import './TextSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <div>
      <div className="gradient-background"></div> {/* Fondo de gradiente */}
      <div className="fade-in">
        <Navbar />
        <TextSection />
      </div>
    </div>
  );
}

export default App;









