import React from 'react';
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa6';

const Footer = () => {
	return (
		<footer id='footer' className=" text-white  mt-10 ">
		<div className="container mx-auto grid grid-cols-3 gap-4 text-center bg-green-300
		">
			
				<div className="flex flex-col justify-center">
					<h2 className="text-lg font-semibold">
						Our Services
					</h2>
					<ul className="mt-2">
						<li className="hover:text-gray-300">
							Software Development Course
						</li>
						<li className="hover:text-gray-300">
							Mentorship Programs
						</li>
						<li className="hover:text-gray-300">
							Innovation Workshops
						</li>
						<li className="hover:text-gray-300">
                      
                            Hackathons and Coding competitions
						</li>
						<li className="hover:text-gray-300">
							Community Involvement
						</li>
					</ul>
				</div>

			

				<div className="flex flex-col justify-center">
					<h2 className="text-lg font-bold">Contact Us</h2>
					<address className="mt-2">
					500018 SEGOPJE 0744
					</address>
					<p className="mt-1">Phone: +27 76 6211 705
					<br/>+27 68 1296 099 </p>
					<p>Email: phoshokorr@gmail.com</p>
					<div className="mt-2 flex justify-center">
						<a href="#" className="mr-2 text-4xl 
			hover:text-green-300 cursor-default">
							<FaWhatsapp />
						</a>
						<a href="#https://www.linkedin.com/feed/" className="mr-2 text-4xl 
			hover:text-green-300 cursor-default">
							<FaLinkedin />
						</a>
						<a href="#" className="hover:text-green-300
			text-4xl cursor-default">
							<FaFacebook />
						</a>
						<a href="#https://github.com/Sedi-B" className="hover:text-green-300
			text-4xl cursor-default">
							<FaGithub />
						</a>
					</div>
				</div>

				<div className="flex flex-col justify-center">
					<h2 className="text-lg font-bold">
                    SEDI-DEVHUB 
					</h2>
					<input type="email" placeholder="Enter your email"
						className="mt-2 px-4 py-2 bg-gray-700 text-white 
		border border-gray-600 rounded-md focus:ring
			focus:border-green-400" />
				</div>

			</div>
		</footer>
	);
};

export default Footer;
