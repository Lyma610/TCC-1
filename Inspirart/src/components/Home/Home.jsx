import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Home/Home.css'; // Importando o CSS
import img1 from '../../assets/img-1.jpeg';
import img2 from '../../assets/img-2.jpeg';
import img3 from '../../assets/img-3.jpeg';
import img4 from '../../assets/img-4.jpeg';
import img5 from '../../assets/img-5.jpeg';
import img6 from '../../assets/img-6.jpeg';
import { FaHome } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { CiBellOn } from "react-icons/ci";
import { FaComments } from "react-icons/fa";




function Home() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const showMessage = (action) => {
    alert('Você clicou em ' + action);
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className='all'>
    <div className="screen">
      <div className="top-bar">
        <div className="profile-button" onClick={toggleMenu}></div>
        <div className="menu-container">
          <span>Para você</span>
          <span>Seguindo</span>
        </div>
      </div>

      {/* Menu Dropdown */}
      <div className={`menu ${isMenuVisible ? 'show' : 'hide'}`}>
        <Link to="/">Voltar</Link>
        <a href="#">Rock</a>
        <a href="#">Jazz</a>
        <a href="#">Classical</a>
        <a href="#">Hip-Hop</a>
        <a href="#">Perfil</a>
      </div>

      <div className="video-grid">
      {images.map((url, index) => (
    <div className="video" key={index}>
      <img 
        src={url} 
        alt={index + 1} 
        style={{ width: '480px', height: '270px' }} 
      />
      
            <div className="video-icons">
              <div onClick={() => showMessage('Comunidade')}>👥</div>
              <div onClick={() => showMessage('Curtir')}>❤️</div>
              <div onClick={() => showMessage('Seguir')}>⭐</div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottom-bar">
        <FaHome />
        <CiSearch />
        <FaPlus />
        <CiBellOn />
        <FaComments />

      </div>
    </div>
    </div>
  );
}

export default Home;