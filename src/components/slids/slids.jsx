import React from 'react'
import "./slids.css"

export default function Slids() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide col-sm-12 mrg-1 mt-2" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="https://shopfacil.vteximg.com.br/arquivos/banner-home-maes-desktop.jpg?v=637541093856930000" className="d-block w-100 img-slid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619111339664-home-sliderdesktop2x.jpg" className="d-block w-100 img-slid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619139399214-home-sliderdesktop2x.jpg" className="d-block w-100 img-slid" alt="..."/>
                    </div>
                    <div className="carousel-item">
                    <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619138033611-home-sliderdesktop.jpg" className="d-block w-100 img-slid" alt="..."/>
                    </div>
                </div>
               
            </div>
            <div className="mt-5">
                
            </div>
        </div>
    )
}
