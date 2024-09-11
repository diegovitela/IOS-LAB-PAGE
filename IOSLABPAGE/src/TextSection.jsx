import React, { useEffect, useRef } from 'react';
import './TextSection.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import image1 from './assets/foto1.jpg';
import image2 from './assets/foto2.jpg';
import image3 from './assets/foto3.jpg';
import ceo from './assets/ceo.jpg';
import largeImage from './assets/grande.png';
import largeImage2 from './assets/grande2.png';
import largeImage3 from './assets/grande3.png'; 
import largeImage4 from './assets/grande4.png'; 
const TextSection = () => {
  const logosRef = useRef(null);

  useEffect(() => {
    // Duplicar el contenedor de imágenes para el efecto infinito
    const logosSlide = logosRef.current;
    const copy = logosSlide.cloneNode(true);
    logosSlide.parentNode.appendChild(copy);
  }, []);

  return (
    <div className="text-section">
      {/* Sección de encabezados */}
      <h1 className="small-text">Inspira, Inova y Crea</h1>
      <h1 className="large-text">Uniendo mentes brillantes y</h1>
      <h1 className="large-text">tecnología</h1>
      <br />
      <h1 className="small2-text">Únete al grupo de personas que confían en el IOS Development</h1>
      <h1 className="small2-text">Lab para aprender, crear y revolucionar el mundo de las</h1>
      <h1 className="small2-text">aplicaciones móviles</h1>
      <br />

      {/* Sección del carrusel de imágenes */}
      <div className="logos">
        <div className="logos-slide" ref={logosRef}>
          <img src={image1} alt="Logo 1" loading="lazy" />
          <img src={image2} alt="Logo 2" loading="lazy" />
          <img src={image3} alt="Logo 3" loading="lazy" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />

      {/* Inicio de la plantilla de diseño */}
      <div className="text-section2">
        <h1 className="title">Diseño</h1>
        <p className="subtitle">Tu tienda, a tu manera, sin codificación</p>
        <div className="quote">
          {/* Sección de texto principal */}
          <div className="left">
            <br />
            <br />
            <p className="text-left">
              Cree experiencias de cliente de extremo a extremo
              <small>Cree flujos de compra de marca y con total perfección de píxeles para sus clientes.</small>
            </p>
          </div>

          {/* Sección de cita del autor */}
          <div className="right">
            <div className="author-info-container">
              <p className="text-right">
                “Somos una marca que se centra en el diseño y nos esforzamos por ofrecer una experiencia de comercio electrónico que refleje eso. Webflow nos permite lograrlo.”
              </p>
              <div className="author-info">
                <img src={ceo} alt="Jameel Mohamed" className="author-image" loading="lazy" />
                <div className="author-info-text">
                  <span className="author-name">Jameel Mohamed</span>
                  <span className="author-role">Fundador de Khiry</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen open every Friday */}
        <div className="large-image-container">
          <img src={largeImage} alt="Imagen Grande" className="large-image" loading="lazy" />
        </div>

        {/* Texto adicional 1 */}
        <div className="additional-text">
          <div className="left-text">
            <h2>Diseñe en torno a sus productos únicos</h2>
          </div>
          <div className="customize-cart-right">
            <p>Resalte los detalles del producto que más le interesen. Resalte características específicas del producto, imágenes y otra información con campos de producto personalizables.</p>
          </div>
        </div>

        {/* Imagen checkout */}
        <div className="additional-image-container">
          <img src={largeImage2} alt="Imagen Adicional" className="additional-image" loading="lazy" />
        </div>
<br />
        {/* Texto adicional 2 */}
        <div className="customize-cart-text">
          <div className="customize-cart-left">
            <h2>Personaliza tu carrito y realiza el pago</h2>
          </div>
          <div className="customize-cart-right">
            <p>Realice la venta con experiencias de carrito y pago que combinen con el resto de su tienda.</p>
          </div>
        </div>

        {/* Nueva imagen y texto */}
        <div className="large-image-container">
          <img src={largeImage3} alt="Nueva Imagen Grande" className="large-image" loading="lazy" />
        </div>
        <div className="customize-cart-text">
          <div className="customize-cart-left">
            <h2>Control de diseño completo, sin codificación</h2>
            <small>Personalice el diseño de su página de inicio y las páginas de la galería para causar una buena impresión en los visitantes.</small>
          </div>
          <div className="customize-cart-right">
            <p>“Como diseñador, Webflow me permite crear un sitio de comercio electrónico sorprendente y único con casi cualquier cosa: animaciones, efectos y un diseño totalmente responsivo sin tener que profundizar en el código”.</p>
          </div>
        </div>
        <div className="large-image-container">
          <img src={largeImage4} alt="Nueva Imagen Grande" className="large-image" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default TextSection;

















