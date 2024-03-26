/* eslint-disable eqeqeq */

import { ConatinerModalImageSlids } from './modal';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ModalImageComentario = ({data}) => {

  
  const imgDataRes = [data]

  const res = imgDataRes.map(imgData => imgData[0].image)
  console.log(res)

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
          {imgDataRes.map(imgData => (
            imgData == "" ? data[0].image[0] : 
              <SwiperSlide key={imgData[0].image} style={{width: "100%", height: "100vh"}}>
                <img src={imgData} style={{width: "100%", height: "80vh"}} id="logo" alt="Imagem não encontrada" />
              </SwiperSlide>
          ))}
        </Swiper>}
      </>
    </ConatinerModalImageSlids>
  );
};

