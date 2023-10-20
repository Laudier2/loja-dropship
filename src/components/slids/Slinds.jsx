import React from 'react'
import './slids.css'


const data = [
    {id: '1', image: "https://images.tcdn.com.br/img/img_prod/819624/1658245548_mini_banner_2_-_fitness.jpg"},
    {id: '2', image: "https://i.pinimg.com/originals/f4/4b/04/f44b04304daac11aebaed9d364dc7614.jpg"},
    {id: '3', image: "https://img.freepik.com/vetores-premium/modelo-de-banner-da-semana-da-moda-banner-promocional-de-moda_122059-223.jpg"},
    {id: '4', image: "https://www.lojasvitorina.com.br/imagens/BANNER-VITORINA-11.jpg"},
]

export default function Slinds() {
  return (
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
  )
}
