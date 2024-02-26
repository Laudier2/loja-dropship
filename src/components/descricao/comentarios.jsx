import { ConatinerComentarios } from "./stylesComentarios"
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

					const { name, image, message, imgName } = res

					return (
						<>
							<div className="div2">
									<img src={imgName} alt="" srcset="" />
									<h5>{name}</h5>
							</div>
							<div className="div2">
									<p>{message}</p>
							</div>
							<div className="div1">
								{image[0] ? <img src={image[0]} alt="comentarios" /> : ""}
								{image[1] ? <img src={image[1]} alt="comentarios" /> : ""}
								{image[2] ? <img src={image[2]} alt="comentarios" /> : ""}
								{image[3] ? <img src={image[3]} alt="comentarios" /> : ""}
								{image[4] ? <img src={image[3]} alt="comentarios" /> : ""}
								{image[5] ? <img src={image[3]} alt="comentarios" /> : ""}
							</div>
						</>
					)
				})}
            </section>
        </ConatinerComentarios>
    )
}