import { useQuery } from "react-query";
import { ConatinerComentarios } from "./stylesComentarios"
import api from "../../api/api";
import { useState } from "react";
//import ReactImageMagnify from "react-image-magnify";

export const Comentarios = () => {

    const [ comentario, setComentario ] = useState([])

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

								const { name, image, message } = res

								return (
									<>
										<div className="div2">
												<img src="data:image/jpeg;base64,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" alt="" srcset="" />
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