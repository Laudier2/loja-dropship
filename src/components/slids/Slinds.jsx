import React from 'react'
import './slids.css'
import { ContainerPRT } from './stylend'


const data = [
    {id: '1', image: "https://img.freepik.com/psd-premium/venta-black-friday-publicacion-redes-sociales-publicacion-instagram-banner-web-o-plantilla-portada-facebook_220443-1063.jpg?w=2000"},
    {id: '2', image: "https://img.freepik.com/psd-premium/venda-de-black-friday-nas-midias-sociais-no-instagram-no-banner-da-web-ou-no-modelo-de-capa-do-facebook_220443-1040.jpg"},
    {id: '3', image: "https://img.freepik.com/psd-premium/venta-black-friday-publicacion-redes-sociales-publicacion-instagram-banner-web-o-plantilla-portada-facebook_220443-1063"},
    {id: '4', image: "https://www.lojasvitorina.com.br/imagens/BANNER-VITORINA-11.jpg"},
]

export default function Slids() {
  return (
    <>
		<div className='slider'>

			<div className="slids">

				<input type="radio" name='radio-btn' id='radio1'/>
				<input type="radio" name='radio-btn' id='radio2'/>
				<input type="radio" name='radio-btn' id='radio3'/>
				<input type="radio" name='radio-btn' id='radio4'/>
				

					<div className="slide first">
						{data.map((item) => (
							<img src={item.image} alt="Slider" />
							))}
					</div>
									
					<div className="navigation-auto">
						<div className="auto-btn1"></div>
						<div className="auto-btn2"></div>
						<div className="auto-btn3"></div>
						<div className="auto-btn4"></div>
					</div>

					<div className="manual-navigation">
						<label for="radio1" className='manual-btn'></label>
						<label for="radio2" className='manual-btn'></label>
						<label for="radio3" className='manual-btn'></label>
						<label for="radio4" className='manual-btn'></label>
					</div>

				</div>
			</div>
		<ContainerPRT>
			<ul>
				<li> 
					<span>
						<img src="" alt="" srcset="" />
					</span>
					<a href="https://wa.me/5575998172448?text=Ol%C3%A1%20tudo%20bem%2C%20gostaria%20de%20saber%20mais%20sobre%20alguns%20produtos%20da%20Loja%3F" target="blank">
						Contato
					</a>
				</li>
				<li>
					<span>
						<img src="" alt="" srcset="" />
					</span>
					<a href="https://rastreamento.correios.com.br/app/index.php" target="blank">Rastreio</a>
				</li>
				<li>
					<span>
						<img src="" alt="" srcset="" />
					</span>
					<a href="/">Novidade</a>
				</li>
				<li>
					<span>
						<img src="" alt="" srcset="" />
					</span>
					<a href="/politica" target="blank">Politica</a>
				</li>
				<li>
					<span>
						<img src="#" alt="" srcset="" />
					</span>
					<a href="/politica" target="blank">Meus pedido</a>
				</li>
			</ul>
		</ContainerPRT>
    </>
  )
}
