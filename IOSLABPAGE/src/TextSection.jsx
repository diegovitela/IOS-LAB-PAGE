import React from 'react';
import './TextSection.css';

import image1 from './assets/foto1.jpg';
import image2 from './assets/foto2.jpg';
import image3 from './assets/foto3.jpg';

const images = [image1, image2, image3];

const TextSection = () => {
  const carouselImages = [...images, ...images]; // Duplica las imágenes para un efecto de carrusel infinito

  return (
    <div className="text-section">
      <br />
      <br />
      <h1 className="small-text">Inspira, Inova y Crea</h1>
      <h1 className="large-text">Uniendo mentes brillantes y</h1>
      <h1 className="large-text">tecnología</h1>
      <br />
      <h1 className="small2-text">Únete al grupo de personas que confían en el IOS Development</h1>
      <h1 className="small2-text">Lab para aprender, crear y revolucionar el mundo de las</h1>
      <h1 className="small2-text">aplicaciones móviles</h1>
      <br />
      <br />
      <br />
      <div className="carousel-container overflow-hidden w-full">
        <div className="carousel-track flex whitespace-nowrap animate-scroll">
          {carouselImages.map((image, index) => (
            <div className="carousel-item" key={index}>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextSection;









