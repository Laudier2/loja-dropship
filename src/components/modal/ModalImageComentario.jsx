/* eslint-disable eqeqeq */

import { ConatinerModalImageSlids } from './modal';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ModalImageComentario = ({data}) => {

  console.log(data[1])

  return (
    <ConatinerModalImageSlids>
      <>
        {<Swiper 
          slidesPerView={1}
          pagination={{ onClick: true }}
          grabCursor={true}
          navigation
          style={{width: "100%", height: "80vh", color: "aqua"}}
        >
          {data.map(imgData => (
            imgData == "" ? data[0] : 
              <SwiperSlide key={imgData} style={{width: "100%", height: "100vh"}}>
                <img src={imgData} style={{width: "100%", height: "80vh"}} id="logo" alt="Imagem não encontrada" />
              </SwiperSlide>
          ))}
        </Swiper>}
      </>
    </ConatinerModalImageSlids>
  );
};

