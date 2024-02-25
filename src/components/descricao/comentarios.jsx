import { useQuery } from "react-query";
import { ConatinerComentarios } from "./stylesComentarios"
import api from "../../api/api";
import { useState } from "react";
//import ReactImageMagnify from "react-image-magnify";
//Novas mudanças

export const Comentarios = () => {

    const [ comentario, setComentario ] = useState([])

    // eslint-disable-next-line no-unused-vars
    const { isLoading, data } = useQuery("comentario", async () => {
        return await api
        .get("/comentario")
        .then((res) => setComentario(res.data))
    
        // eslint-disable-next-line no-unreachable
        if(isLoading){
          return <div className="load">Carregando...</div>
        }
        
      }
      
      );

    ///https://i.ibb.co/z6z4z4z/comentarios.png

    return (
        <ConatinerComentarios>
            <h1>Avaliações Do Produto</h1>
			
            <section>
				{comentario.map(res => {

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