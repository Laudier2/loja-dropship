import React from 'react'
import { ContainerFooter, ContainerFooter1, ContainerFooter2 } from './styles';
import { Link } from 'react-router-dom';
//import { Height } from '@material-ui/icons';

export default function Footer() {

	const imgCart = [
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/visa@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/mastercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/amex@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/diners@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/aura@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/elo@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/hipercard@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/payment-method-types/pix@2x.png"},
		{img: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/payment/new_logos_payment/br/discover@2x.png"},
	]

	const formaEnvio = [
		{envio: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/br/correios@2x.png"},
		{envio: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/br/correios/pac@2x.png"},
		{envio: "https://d26lpennugtm8s.cloudfront.net/assets/common/img/logos/shipping/br/correios/sedex@2x.png"},
	]

	const seguranca = [
		{seguro: "https://d2az8otjr0j19j.cloudfront.net/templates/001/152/331/twig/static/images/google-safe-white.png"},
	]

	return (
		<>
			<ContainerFooter>
				<Link to="/">
					<h2>StylesTop</h2>
				</Link>
				<span>Receba novidades em primeira mão, deixe seu e-mail aqui!</span>
				<form method='post' name="contact" nelify>
					<input type="text" placeholder='Nome' name='name' />
					<input type="email" placeholder='E-mail' name='email' />
					<input type="submit" value="Enviar" className='btnInput' />
					{/*<textarea name="message" id="" cols="100%" rows="4" placeholder='Message'></textarea>*/}
				</form>
			</ContainerFooter>
			<ContainerFooter2>
				<div>
					<h4>Forma de pagamento</h4>
					{imgCart.map(img => (
						<img src={img.img} alt="im"/>
					))}
				</div>
				<div>
					<h4>Meios de envio</h4>
					{formaEnvio.map(img => (
						<img src={img.envio} alt="im"/>
					))}
				</div>
				<div>
					<h4>Segurança</h4>
					{seguranca.map(seg => (
						<img src={seg.seguro} className='img' alt="im"/>
					))}
				</div>
				
			</ContainerFooter2>
			
			<ContainerFooter1>
				<div>
					<strong>Trabalhamos com boné de ótima qualidade, receba seu produto ou devolvemos seudinhiro.</strong>
					<p>&copy; Todos os direitos reservado StylesTop</p>
					
				</div>
				<div>
					<url>
						<li>E-mail: laudiersantanamei@gmail.com</li>
						<li>Phone: (75) 998239680</li>
						<li>CNPJ: 11.363.576/0001-30</li>
					</url>
				</div>
			</ContainerFooter1>
		</>
	)
}
