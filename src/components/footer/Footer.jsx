import React from "react";
import "./Footer.css";

import { FaFacebook, FaTelegram, FaMapMarkedAlt } from "react-icons/fa";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";

function Footer() {
	return (
		<section className="Footer">
			<div className="outer-div1">
				<div className="footer-details-div">
					<h1 className="details-heading">
						HUNGER BURNERS
					</h1>
					<address className="details-address">
						<FaMapMarkedAlt size="1.2rem" />
						&nbsp;&nbsp;paningapalle, andhra pradesh, india.
					</address>
					<a href="tel:+91897545846" className="details-contact-number">
						<BsTelephoneForwardFill size="1.2rem" />
						&nbsp;&nbsp;+919876543210
					</a>
					<a href="mailto:hungerburners@gmail.com" className="details-mail-id">
						<HiMail size="1.2rem" />
						&nbsp;&nbsp;hungerburners@gmail.com
					</a>
				</div>

				<div className="social-media-div">
					<div>
						<h3>Connect with us:</h3>
					</div>
					<div className="social-media-links">
						<a href="https://www.facebook.com/">
							<FaFacebook />
							&nbsp;&nbsp;Facebook
						</a>
						<a href="https://www.instagram.com/">
							<AiFillInstagram />
							&nbsp;&nbsp;Instagram
						</a>
						<a href="https://www.twitter.com/">
							<AiFillTwitterCircle />
							&nbsp;&nbsp;Twitter
						</a>
						<a href="https://www.telegram.com/">
							<FaTelegram />
							&nbsp;&nbsp;Telegram
						</a>
					</div>
				</div>

				<div className="footer-subscribe-div">
					<h3>Subscribe to our newsletter !!</h3>
					<div className="subscribe-div">
						<input
							className="subscribe-input"
							type="mail"
							placeholder="Enter your mail address..."
						/>
						<button className="subscribe-btn">
							<a href="mailto:hungerburners@gmail.com" className="details-mail-id">Subscribe</a>
						</button>
					</div>
					<p>*I agree to receive the email's from the restaurant.</p>
				</div>
			</div>
			<hr />
			<div className="outer-div2">
				<div>
					<p>©️&nbsp;Copyright 2023</p>
				</div>
				<div>
					<a href="#Privacy">Privacy Poliicy</a>
					<a href="#T&C">Terms and Conditions</a>
					<a href="#Fund">Fund Raising</a>
				</div>
			</div>
		</section>
	);
}

export default Footer;
