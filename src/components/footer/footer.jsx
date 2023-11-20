import React from 'react'
import { ContainerFooter, ContainerFooter2 } from './styles';

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
				<h2>Top dos Boné</h2>
				<span>Receba novidades em primeira mão, dei seu e-mail aqui!</span>
				<form action="">
					<input type="text" placeholder='Nome' />
					<input type="email" placeholder='E-mail' />
					<button>ok</button>
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
				<main>
					<h4>Segurança</h4>
					{seguranca.map(img => (
						<img src={img.seguro} alt="im"/>
					))}
				</main>
			</ContainerFooter2>
			<ContainerFooter2>
				<div>
					<h3>Trabalhamos com boné de ótima qualidade, receba seu produto ou devolvemos seudinhiro.</h3>
					<p>@copy:teste</p>
				</div>
				<div>
					<h3>Trabalhamos com boné de ótima qualidade, receba seu produto ou devolvemos seudinhiro.</h3>
				</div>
			</ContainerFooter2>
		</>
	)
}
