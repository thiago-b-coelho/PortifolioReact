import React from "react";
import "./Navbar.scss";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

const Navbar = () => {
    return (
        <div className="Navbar">
            <ul className="Navbar__sections">
                <li>
                    <Nav.Link href="#Presentation">Apresentação</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#Skills">Habilidades</Nav.Link>
                </li>
                <li>
                    <Nav.Link href="#Projects">Projetos</Nav.Link>
                </li>
            </ul>
            <ul className="Navbar__icons">
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
        </div>
    );
};

export default Navbar;
