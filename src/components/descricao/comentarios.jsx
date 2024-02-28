/* eslint-disable eqeqeq */
import { GoStarFill } from "react-icons/go"
import { ConatinerComentarios } from "./stylesComentarios"
import { TiStarHalfOutline } from "react-icons/ti"
import { ContainerComentario } from "./styles"
import Modal from "../modal/Modal"
//import ReactImageMagnify from "react-image-magnify";
//Novas mudanças

export const Comentarios = ({dataProduct, idPro}) => {

	const filterProduct = dataProduct.map(pro => pro.comentarios)
	const dataProductFilter = filterProduct.filter(productData => (productData.idProduct == idPro))

	console.log(dataProductFilter)

    ///https://i.ibb.co/z6z4z4z/comentarios.png
		
		const page = {
			id: "1",
			name: "Laudier",
			phone: "7599999",
			image: "data:image/jpeg;base64,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",
			password: "123",
			email: "laudier@gmail.com"
		}
    return (
			<>
				{dataProduct ? 
				
				<ConatinerComentarios>
	
				<section>
			{dataProductFilter.map(res => {
				
				const { name, image, message, imgName, estrela} = res
				
				return (
					<ContainerComentario>
						<span>
							<p>{estrela - 0.2}</p>
								<GoStarFill className='text-warning estrelas3'/>
								<GoStarFill className='text-warning estrelas3'/>
								<GoStarFill className='text-warning estrelas3'/>
								<GoStarFill className='text-warning estrelas3'/>
								<TiStarHalfOutline className='text-warning estrelas4'/>
						</span>
							<h1>Avaliações Do Produto</h1>

							<button
								type="button"
								class="btnButtonModal"
								data-bs-toggle="modal"
								data-bs-target="#exampleModal"
			
							>
								Deixe seu comentario
							</button>

							<div
								class="modal fade"
								id="exampleModal"
								tabindex="-1"
								aria-labelledby="exampleModalLabel"
								aria-hidden="true"
							>
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header">
											<h5
												class="modal-title titolo2"
												id="exampleModalLabel"
											>
												Dados do Usuário
											</h5>
											<button
												type="button"
												class="btn-close"
												data-bs-dismiss="modal"
												aria-label="Close"
												className="btn-outline-secondary"
											></button>
										</div>
										<div class="modal-body text-dark">
											<Modal dados={page} />
										</div>
										<div class="modal-footer">
											<button
												type="button"
												class="btn btn-outline-secondary btn-block "
												data-bs-dismiss="modal"
											>
												Fecha
											</button>
										</div>
									</div>
								</div>
							</div>
							
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
					: <p style={{display: "flex",  margin: "auto", width: 50}}>Carregando...</p>
			}
			</>
    )
}