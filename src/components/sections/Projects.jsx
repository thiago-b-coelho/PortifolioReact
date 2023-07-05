import React from 'react'
import "./Projects.scss"
import ButtonB from "../elements/ButtonB"
import Card from '../elements/Card'
import project1 from '../../assets/projects/project-example.svg'

const Projects = () => {
  return (
    <section className="Projects" id="#Projects">
      <h1>Projetos</h1>
      <Card img={project1} title="LP - DNC" tech="HTML, CSS, JS" description="Landing page básica" repo="https://github.com/thiago-b-coelho?tab=repositories" site="https://github.com/thiago-b-coelho?tab=repositories" />
      <ButtonB text="Acesse meu repositório" link="https://github.com/thiago-b-coelho?tab=repositories" />
    </section>
  )
}

export default Projects