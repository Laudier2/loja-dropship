/* eslint-disable eqeqeq */
import LocationOnIcon from '@material-ui/icons/LocationOn';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import ReactLoading from 'react-loading';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/cart/cart';
import { Wrapper, Conatiner, Row, Panel, Gallery, Section, Description, Colum } from './stylesdescription';
import { Link } from 'react-router-dom';
import { FaCreditCard } from "react-icons/fa";
import { TiStarHalfOutline } from "react-icons/ti";
import { GoStarFill } from "react-icons/go";


const Descricao = () => {

  const useId = localStorage.getItem("id")

  const product = useSelector(productsSlice => productsSlice.products.items)


  const productFilter = product.filter(product => (product.id === useId))

  const img = productFilter.map(i => i.image)

  console.log(img)


  function over0() {
    document.getElementById("logo").src = `${img[0]}`;
  }
  function over1() {
    document.getElementById("logo").src = `${img[1]}`;
  }
  function over2() {
    document.getElementById("logo").src = `${img[2]}`;
  }

  function over3() {
    document.getElementById("logo").src = `${img[3]}`;
  }

  function over4() {
    document.getElementById("logo").src = `${img[4]}`;
  }

  const dispatch = useDispatch()

  function handlerCartAdd(e) {
    dispatch(addCart(e))
  }
  
  return (
    <>
      <Wrapper>
        <Conatiner>
          <Row>
            <a href="#"></a>
            <a href="#"></a>
          </Row>

          <Panel>
            <Colum>
            <img src="https://decathlonpro.vtexassets.com/arquivos/ids/10176268/16507385782524.jpg?v=637865718260400000" alt="img"/>
            </Colum>

            <Colum>
              <Description>
                <h2>Descrição</h2>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at urna tortor. Fusce pharetra porttitor sodales. Donec facilisis enim a placerat tempor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lobortis turpis quam, nec condimentum ligula faucibus at. Phasellus pretium nisl vel aliquam eleifend. Vivamus velit urna, iaculis vitae vestibulum eget, rhoncus ac lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque aliquet enim non sapien rutrum viverra. Ut euismod sem in erat fringilla, et luctus risus aliquam. Nam maximus orci tincidunt tellus tristique dictum. Nullam ac neque id nunc scelerisque hendrerit. Nam quis sodales risus, at condimentum ipsum. In tempor tortor eros, vel feugiat velit pretium eu. Nulla nec ex magna. Aliquam tincidunt justo urna, a condimentum arcu gravida id.
                </p>
              </Description>
              <section>
                <h4>Garantia</h4>

                <div>
                  <span>
                    <p className="title">
                      Compra garantida com maior segurança que sxite na intenet.
                    </p>
                    <p className="description">
                      Receba seu produto que esta esperando ou seu dinheiro de volta.
                    </p>
                  </span>
                  <span>
                    <p className="title">
                      Grantia de 7 dias uteis apos receber seu produto.
                    </p>
                    <p className="description">
                      Lembre-se que para devolução ou troca você tem 7 dias uteis, e o produto não pode ter cinais de uso.
                    </p>
                  </span>
                </div>
              </section>
            </Colum>
          </Panel>
        </Conatiner>
      </Wrapper>
    </>
  );
}

export default Descricao;

