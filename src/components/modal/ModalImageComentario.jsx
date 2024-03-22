/* eslint-disable eqeqeq */

import { ConatinerModal } from './modal';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ModalImageComentario = ({data}) => {

  return (
    <ConatinerModal>
      <div className="container col-sm-8 bg-img1">
      <Swiper 
          slidesPerView={1}
          pagination={{ onClick: true }}
          grabCursor={true}
          navigation
        >
          {data.map(imgData => (
            imgData == "" ? data[0] : 
              <SwiperSlide key={imgData}>
                <img src={imgData} style={{width: "100%", height: "100%"}} id="logo" alt="Imagem não encontrada" />
              </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </ConatinerModal>
  );
};

