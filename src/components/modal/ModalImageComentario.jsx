/* eslint-disable eqeqeq */

import { ConatinerModalImageSlids } from './modal';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ModalImageComentario = ({data}) => {

  //console.log(data)

  const imgDataRes = [data[0].imageUm, data[0].imageDois, data[0].imageTres, data[0].imageQuantro, data[0].imageSinco]

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
            imgData == "" ? data.imageUm : 
              <SwiperSlide key={imgData} style={{width: "100%", height: "100vh"}}>
                <img src={imgData} style={{width: "100%", height: "80vh"}} id="logo" alt="Imagem não encontrada" />
              </SwiperSlide>
          ))}
        </Swiper>}
      </>
    </ConatinerModalImageSlids>
  );
};

