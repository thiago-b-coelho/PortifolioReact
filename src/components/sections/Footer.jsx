import React from "react";
import './Footer.scss'
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <section className="Footer">
            <ul className="Footer__icons">
                <li>
                    <a
                        href="https://instagram.com/thiagocoelho_"
                        target="_blank"
                    >
                        <FaInstagram size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/thiago-barros-coelho/"
                        target="_blank"
                    >
                        <FaLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/thiago-b-coelho"
                        target="_blank"
                    >
                        <FaGithub size={30} />
                    </a>
                </li>
            </ul>
            <p>tbarroscoelho@gmail.com</p>
            <p> Thiago Coelho © 2023 </p>
        </section>
    );
};

export default Footer;
