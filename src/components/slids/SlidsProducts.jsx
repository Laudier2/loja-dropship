import React from 'react'

export default function SlidsProducts() {
  return (
    <>
        <div class="card-group">
            <div class="card">
            <div className='col-sm-11'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img class="d-block w-30" src="https://acdn.mitiendanube.com/stores/001/152/331/products/photo-output_11_cr11-83d45b7ae2e50d8da216710461064580-480-0.webp" alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-30"  src="https://acdn.mitiendanube.com/stores/001/152/331/products/photo-output_46_cr1-752f0b22ee57fd4be716875530986716-480-0.webp" alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                    <img class="d-block w-30" src="https://acdn.mitiendanube.com/stores/001/152/331/products/photo-output_0_cr1-1dbb477aa1edeca7e716947210029213-480-0.webp" alt="Third slide"/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only"></span>
                </a>
                <a class="carousel-control-next text-info" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon text-info" aria-hidden="true"></span>
                    <span class="sr-only text-info"></span>
                </a>
            </div>
            </div>
            </div>
        </div>
    </>
   
  )
}
