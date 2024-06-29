import React from "react";
import { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Image from "react-bootstrap/Image";
import img1 from './image/Anay.jpg';
import img2 from './image/Dir.jpg';
import img3 from './image/Etudiant.jpg';
import axian from './image/axian.png';
import telma from './image/Telma.jpg';
import af from './image/af.png';
import jovena from './image/jovena.png';
import bni from './image/bni.png';
import '../pages/AproposStyle.css'
import { ReactTyped } from "react-typed";
export const Apropos =()=>{
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return(
  <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item interval={5000}>
      <Image src={img1} className="Image"/>
      <Carousel.Caption>
        <h1 className="mx-auto text_typed"><strong>UNIVERSITE <ReactTyped strings={["PRIVE D'AMBOHIDRATRIMO"]} typeSpeed={150} loop/> </strong></h1>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <Image src={img2} className="Image"/>
    </Carousel.Item>
    <Carousel.Item interval={2000}>
      <Image src={img3} className="Image"/>
    </Carousel.Item>
  </Carousel>
  <div className="container-fluid">
      
      <div>
      <ScrollAnimation animateIn="fadeInLeft"
          delay={0.1 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}>
        <h1 className="title-1">Historique</h1>
      </ScrollAnimation>
      <p class="text-justify h5">
    Fondée en 2021,<strong className="text-primary">l’Université Privée d’Ambohidratrimo (UPA)</strong> s’est établie comme un établissement d’enseignement supérieur visionnaire, dédié à l’excellence académique et à l’adéquation entre la formation et le marché de l’emploi. 
    Dès son inauguration, l’UPA a ouvert ses portes aux étudiants ambitieux en proposant la mention Hautes Études en Commerce et Management (HECM), avec l’engagement de forger les leaders de demain dans les domaines du management, de l’administration des entreprises, du marketing, du commerce international, de la finance et de la comptabilité.
    </p>
    <p class="text-justify h5">
    Sous la direction éclairée du <strong className="text-primary">Dr Jesy Ramanamisata</strong> , l’UPA a rapidement obtenu l’habilitation du ministère de l’Enseignement Supérieur et de la Recherche Scientifique, affirmant ainsi sa crédibilité et son sérieux académique.
     Avec une capacité initiale d’accueil de cent étudiants, l’université a marqué le paysage éducatif par son infrastructure de pointe et ses installations haut de gamme, incluant des salles de cours modernes, un logement étudiant inédit pour une université privée à Madagascar, et un complexe sportif prometteur.
    </p> 
    <p class="text-justify h5">L’histoire de l’Université Privée d’Ambohidratrimo est celle d’une institution qui s’élève avec ses étudiants, en visant <strong className="text-primary">“Toujours Plus Haut”</strong>, 
      et en construisant un avenir où chaque diplômé est un pilier du développement professionnel et social.</p>
      </div>
      <div className="Page-2">
      <Container className="Apropos mt-5">
        <Row>
          <Col>
          <ScrollAnimation animateIn="fadeInLeft"
          delay={0.1 * 1000}>
          <h3 className="title-2">Notre Mission</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInLeft"
          delay={0.1 * 1000}>
          <div>
            <p className="text-justify h5">
              <strong>Accompagner la jeunesse Africaine vers l'Excellence </strong>
              tant dans le domaine intellectuel que proffessionnel
            </p>
          </div>
          </ScrollAnimation> 
          </Col>
          <Col>
          <ScrollAnimation animateIn="fadeInLeft"
          delay={0.2 * 1000}>
          <h3 className="title-2">Notre Vission</h3>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInRight"
          delay={0.2 * 1000}>
          <div>
            <p className="text-justify h5">
            Par son enseignement et la pratique des apprentissages , grâce aux expérience acquise em emtreprise, 
            <strong>nos étudiants constitueront un moteur de changement et d'innovation </strong>tant au niveau localet qu'a l'international
            </p>     
          </div>
          </ScrollAnimation>
          </Col>
        </Row>
        </Container>
        <Container className="mt-4 page_2">
        <ScrollAnimation animateIn="fadeInLeft"
          delay={0.3 * 1000}>
            <h3 className="mx-auto title-2">Nos Valeurs </h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight"
          delay={0.3 * 1000}>
          <Row>
            <Col>
            <p className="text-justify h5">
            <strong>Excellence et amelioration continue</strong> <br />
            Nous visons l'exellence dans tout ce que nous entreprenons. Meme si la perfection n'est pas atteignable, rien ne nous empeche de nous surpasser. <br />
            </p>
            </Col>
            <Col>
            <p className="text-justify h5">
            <strong>Ouverture et respect</strong> <br />
            Nous reconnaissant les gouts et les choix de chacun. 
            C'est pourquoi nous misons sur la diversité de notre équipe, de nos partenaires et de nos étudiants.
            </p>
            </Col>
            <Col>
            <p className="text-justify h5">
            <strong>Passion et innovation</strong> <br />
            La passion d'apprendre, d'explorer, d'innover, de decouvrir et de transmettre vont permettre à  nos étudiant d'anticiper les changements et de s'y préparer de façon créative.
            Nous cherchons constamment à nous améliorer et aller toujours plus haut. 
            </p>
            </Col>
            <Col>
            <p className="text-justify h5">
            <strong>Professionnalisme et Discipline</strong> <br />
            Ce n'est qu'en restant inflexible sur le Professionnalisme et la discipline de nos collaborateurs, ainsi que de nos étudiants sur le plan éthique et de l'honneteté que nous atteindrons l'exellence.  
            </p>
            </Col>
          </Row>
          </ScrollAnimation>
        </Container>
      </div>
      <div className="page-3">
        <h1 className="title">Nos Partenariat</h1>
        <ul className="d-flex ocean_trade">
          <li><img src={axian} alt="" className="partenariat" /></li>
          <li><img src={telma} alt="" className="partenariat" /></li>
          <li><img src={bni} alt="" className="partenariat" /></li>
          <li><img src={af} alt="" className="partenariat" /></li>
          <li><img src={jovena} alt="" className="partenariat" /></li>
        </ul>
      </div>
    </div>
    </>

  )
}