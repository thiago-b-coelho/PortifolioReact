import React from 'react'
import js from "../../assets/skills/js.svg"
import css from "../../assets/skills/css.svg"
import html from "../../assets/skills/html.svg"
import react from "../../assets/skills/react.svg"
import "./Skills.scss"

const Skills = () => {
  return (
    <div className='Skills' id="Skills">
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas habilidades e conhecimentos.</p>
      <div className="Skills__images">
        <img src={js} alt="" />
        <img src={css} alt="" />
        <img src={html} alt="" />
        <img src={react} alt="" />
      </div>
    </div>
  )
}

export default Skills