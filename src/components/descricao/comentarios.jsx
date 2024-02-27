/* eslint-disable eqeqeq */
import { GoStarFill } from "react-icons/go"
import { ConatinerComentarios } from "./stylesComentarios"
import { TiStarHalfOutline } from "react-icons/ti"
import { ContainerComentario } from "./styles"
//import ReactImageMagnify from "react-image-magnify";
//Novas mudanças

export const Comentarios = ({dataProduct, idPro}) => {

	const filterProduct = dataProduct.map(pro => pro.comentarios)
	const dataProductFilter = filterProduct.filter(productData => (productData.idProduct == idPro))

	console.log(dataProductFilter)

    ///https://i.ibb.co/z6z4z4z/comentarios.png

    return (
			<ConatinerComentarios>
				<h1>Avaliações Do Produto</h1>
	
				<section>
			{dataProductFilter.map(res => {

				const { name, image, message, imgName} = res

				return (
					<ContainerComentario>
						<div>
								<img src={imgName} alt="img" className="imgName" />
								<h5>{name} <br />
				
									<GoStarFill className='text-warning estrelas2'/>
									<GoStarFill className='text-warning estrelas2'/>
									<GoStarFill className='text-warning estrelas2'/>
									<GoStarFill className='text-warning estrelas2'/>
									<TiStarHalfOutline className='text-warning estrelas'/>
								</h5>
						</div>
						<div>
								<p>{message}</p>
						</div>
						<div>
							{image[0] ? <img src={image[0]} alt="comentarios" className="imgList" /> : ""}
							{image[1] ? <img src={image[1]} alt="comentarios" className="imgList" /> : ""}
							{image[2] ? <img src={image[2]} alt="comentarios" className="imgList" /> : ""}
							{image[3] ? <img src={image[3]} alt="comentarios" className="imgList" /> : ""}
							{image[4] ? <img src={image[3]} alt="comentarios" className="imgList" /> : ""}
							{image[5] ? <img src={image[3]} alt="comentarios" className="imgList" /> : ""}
						</div>
					</ContainerComentario>
				)
			})}
					</section>
			</ConatinerComentarios>
    )
}