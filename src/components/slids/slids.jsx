import React from 'react'
import { ContainerPRT } from './stylend'

export default function Slids() {
    return (
        <div>
            <div id="carouselExampleControls" className="carousel slide col-sm-12 mrg-1 mt-2" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619111339664-home-sliderdesktop2x.jpg" className="d-block w-100 img-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619139399214-home-sliderdesktop2x.jpg" className="d-block w-100 img-slid" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1619138033611-home-sliderdesktop.jpg" className="d-block w-100 img-slid" alt="img" />
                    </div>
                </div>

            </div>
            <ContainerPRT>
			    <ul>
					<li> 
						<a href="/camiseta" target="blank">
						<span>
							<img src="https://cdn.shopify.com/s/files/1/1802/7807/products/camiseta-algodao-pima-preta-algodao-pima-tingimento-reativo-ezutus-roupa-masculina-basica-de-qualidade-638086.webp?crop=center&height=830&v=1678548655&width=1080" alt="img" srcset="" />
						</span>
						</a>
					</li>
					<li>
						<a href="/calca" target="blank">
							<span>
								<img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSMu265ymj1MxowEa1nBKxjaIPv2F-RPo1ZaTvmcTl-eO_JOYz5__3-OGzgOE8KwQeIkp2SEVAc9gZn666S6kGvzM3YMgl6FRxVY0JxxkldFbDdGbg1BGiTVQ&usqp=CAE" alt="img" srcset="" />
							</span>
						</a>
					</li>
					<li>
						<a href="/short">
							<span>
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfFjkweGQJN6jIKoGWIQ6x9GGYhE98PhO3Pw&usqp=CAU" alt="img" srcset="" />
							</span>
						</a>
					</li>
					<li>
						<a href="/bone" target="blank">
							<span>
								<img src="https://images.tcdn.com.br/img/img_prod/570534/bone_snapback_aba_curva_classic_hats_preto_e_mescla_terra_1693_1_20180904151316.jpg" alt="img" srcset="" />
							</span>
						</a>
					</li>
					<li>
						<a href="/tenis" target="blank">
							<span>
								<img src="https://images.tcdn.com.br/img/img_prod/927362/tenis_casual_masculino_adidas_street_check_gw5488_branco_4399_1_c87f666c7529cfe40e11dbdcd59e7b5b.jpg" alt="img" srcset="" />
							</span>
						</a>
					</li>
					<li>
						<a href="/moleton" target="blank">
							<span>
								<img src="data:image/jpeg;base64,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" alt="img" srcset="" />
							</span>
						</a>
					</li>
					<li>
						<a href="/sandalia" target="blank">
							<span>
								<img src="https://http2.mlstatic.com/D_NQ_NP_674248-MLB51585657319_092022-O.webp" alt="img" srcset="" />
							</span>
						</a>
					</li>
					
				</ul>
			</ContainerPRT>
        </div>
    )
}
