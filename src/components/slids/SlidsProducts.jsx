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
                    <img src="banner02.png" className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="banner03.gif" className="d-block w-100" alt="img"/>
                    </div>
                    <div className="carousel-item">
                    <img src="bannerEletronico01.psd.gif" className="d-block w-100" alt="img"/>
                    </div>
                </ContainerSlid>
            </div>
            <buttonContainer>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" style={{marginLeft: "-80%"}} aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon"  style={{marginRight: "-80%"}} aria-hidden="true"></span>
                    <span className="visually-hidden"></span>
                </button>
            </buttonContainer>
        </div>
    </>
   
  )
}
