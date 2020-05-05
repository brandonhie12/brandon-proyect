import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
const Circle = styled.div`
width: 100px ;
height: 100px;
border-radius: 50%;
background-color: #ff0;
`
const Header = styled.h1`
color: red;

`  

const IndexPage = () => (
  <Layout>
    <SEO title="Casa" />
    <Header>Hola que rollo</Header>
    <p>Hola como ests</p>
    <p>Estamos aprendiendo </p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    <div className="circulo">circulo</div>
    <Circle />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
