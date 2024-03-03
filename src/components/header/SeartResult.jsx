import { useNavigate } from "react-router-dom"

export const SeartResult = ({data}) => {

	const navigate = useNavigate()

	function LocalSto(e) {

    localStorage.removeItem("id")

    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)
    localStorage.setItem("categoryId", e.id)
    
    Description()
  }

  
  const Description = (e) => {
    //console.log(e)
    navigate("/desc")
		window.location.reload()
  }

    //console.log(data, "t")

	const resutList = data.map(item => {
		return (
			<>
				{ data ?
					<div>
						<span key={item.id} style={{textDecoration: "none"}}>
							<span>
								<p onClick={() => LocalSto(item)}>{item.name}</p>
								{
									item.image[0] ? <img src={item.image[0]} onClick={() => LocalSto(item)} alt="img" /> : ""
								}
							</span>
						</span>
					</div> : 
				<h4>Veja se voçe escreveu corretamente</h4>
				}
			</>
		)
	})

	return (
		<div>
			{resutList}
		</div>
	)
}
