import React from 'react'
import { ContainerSlid } from './stylend'

export default function SlidsProducts() {
  return (
    <>
        <div id="carouselExampleIndicators" className="carousel slide mt-4">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{height: "10%"}}>
                <ContainerSlid>
                    <div className="carousel-item active">
                    <img src="https://piracicabamktdigital.com.br/wp-content/uploads/2023/03/Banner-Promocao-Dia-dos-Pais-1-1536x768.jpg" style={{height: "10%"}} className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://img.freepik.com/vector-premium/oferta-venta-ano-nuevo-diseno-banner_220809-288.jpg" style={{height: "10%"}} className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://img.freepik.com/vetores-premium/design-de-banner-horizontal-para-venda-de-moda_601782-11.jpg?w=2000" style={{height: "10%"}} className="d-block w-100" alt="img"/>
                    </div>
                </ContainerSlid>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden"></span>
            </button>
        </div>
    </>
   
  )
}
