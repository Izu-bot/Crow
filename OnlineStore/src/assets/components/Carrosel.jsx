/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// import imagens from './dadosImagens';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Swiper.css';



// eslint-disable-next-line react/prop-types
export default function Carrosel({ titulo ,imagens }) {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  })

  const slider = windowWidth <= 490 ? 1 : 3; // Defina o número de slides com base na largura da tela


  return (
    <div className='lookbook'>

      <h1>{titulo}</h1>
      <Swiper pagination={{
        clickable: true,
      }}

        modules={[Pagination]}
        slidesPerView={slider}
        spaceBetween={15}
        className="swiper-container">

        {imagens.map((imagem, index) => (
          <SwiperSlide key={index}>
            <img className='imagem-slider' src={imagem.src} alt={imagem.descricao} />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
