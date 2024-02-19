import { useNavigate } from "react-router-dom"

export const SeartResult = ({data}) => {

    const navigate = useNavigate()

  function LocalSto(e) {

    localStorage.removeItem("id")
    const dados = JSON.stringify(e)
    const id = JSON.parse(dados)
    localStorage.setItem("id", id.id)

    const img = JSON.parse(dados)
    const name = JSON.parse(dados)
    const desc = JSON.parse(dados)
    const price = JSON.parse(dados)
    const color = JSON.parse(dados)
    const quantity = JSON.parse(dados)
    const slug = JSON.parse(dados)
    const size = JSON.parse(dados)
    const bar_code = JSON.parse(dados)

    localStorage.setItem("img0", img.image[0])
    localStorage.setItem("img1", img.image[1])
    localStorage.setItem("img2", img.image[2])
    localStorage.setItem("img3", img.image[3])
    localStorage.setItem("img4", img.image[4])

    localStorage.setItem("color1", color.color[0])
    localStorage.setItem("color2", color.color[1])
    localStorage.setItem("color3", color.color[2])
    localStorage.setItem("color4", color.color[3])
    localStorage.setItem("color5", color.color[4])
    localStorage.setItem("color6", color.color[5])

    localStorage.setItem("name", name.name)
    localStorage.setItem("description", desc.description)
    localStorage.setItem("price", price.price)
    localStorage.setItem("bar_code", bar_code.bar_code)
    localStorage.setItem("slug", slug.slug)
    localStorage.setItem("size", size.size)
    localStorage.setItem("quantity", quantity.quantity)

    console.log(e)
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
