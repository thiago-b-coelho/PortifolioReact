import React from "react";
import ButtonB from "./ButtonB";
import "./Card.scss"

const Card = ({ img, title, tech, description, repo, site }) => {
    return (
        <div className="Card">
            <a href={site}>
                <img src={img} alt="" />
            </a>
            <div className="Card__description">
                <h3>{title}</h3>
                <p>
                    <strong>Tecnologias: </strong>
                    {tech}
                </p>
                <p>{description}</p>
                <ButtonB text="Acesse o repositório" link={repo} />
            </div>
        </div>
    );
};

export default Card;
