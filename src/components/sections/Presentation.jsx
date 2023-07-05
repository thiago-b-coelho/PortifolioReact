import React from "react";
import "./Presentation.scss";
import ButtonA from "../elements/ButtonA";

const Presentation = () => {
    return (
        <div className="Presentation" id="Presentation">
            <h4>
                <strong>Bem-vindo ao meu portfolio</strong>
            </h4>
            <h1>Olá, eu sou Thiago Coelho!</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. Como
                Product Manager, eu tenho o compromisso de resolver
                problemas complexos e trazer resultados excepcionais para os
                negócios. Meus projetos já geraram milhões de reais em receita
                anual estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA text="Conecte-se comigo!" link="https://wa.me/5591988992528"/>
        </div>
        

    );
};

export default Presentation;