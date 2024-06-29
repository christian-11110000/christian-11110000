import React from 'react';
import '../pages/AccueilStyle.css';
import img7 from './image/img7.jpeg'
import img6 from './image/img6.jpeg'
import img5 from './image/img5.jpeg'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Etudiant from './image/Etudiant.jpg';
import { useState ,useEffect } from 'react';

import logo from '../components/log.PNG'
export const Accueil = () => {
    const [ativeSlide , setActiveSlide]= useState(0);
    const slide =  [
        img5,
        img6,
        img7
    ];
    useEffect(()=>{
        const slideInterval = setInterval(()=>{
            setActiveSlide(ativeSlide === slide.length -1 ? 0 : ativeSlide+ 1);
        } , 4000)
        return() => clearInterval(slideInterval);

    } , [ativeSlide , slide.length]);
    return (
    <Container fluid id='fluid'>
    <div className='acc'>
        <Row className='pt-5 row_acc'>
            <Col xs={12} md={6} className='mx-auto' id='grid1'>
            <h2 className='mt-5'>UNIVERSITE PRIVE <br /> D'AMBOHIDRATRIMO</h2>
            <p className='P1'>Toujours Plus Haut</p>
            <Image src={logo} alt="logo" className='logo'/>
            </Col>
            <Col xs={12} md={6}>
                <Image src={slide[ativeSlide]} alt="back" className='back'/>
            </Col>
        </Row>
        </div>
        <h1 className='main-title'>Pourquoi UPA ?</h1>
        <main>
          <section>
          <aside>
                <article className='art-1'>
                    <p className='text'>L'université privé d'Ambohidratrimo est un établissement <br />  satisfaisant les normes internationales d'un campus✔️</p>
                </article>
                <article className='art-2'>
                <p className='text'>🚀 La Détermination pour Atteindre de Nouveaux Sommets 🚀</p>
                <p className="text">Notre devise, "Toujours plus Haut", reflète notre engagement à <br /> 
                pousser les limites de l'excellence académique et professionnelle.<br />
                Ensemble, nous construisons un avenir prometteur.</p>
                </article>
                <article className='art-3'>
                <p className='text'>Un environnement de travail moderne et épanouissant:</p>
                    <ul className='ul-text'>
                        <li>Foyer des étudiants</li>
                        <li>Salle de sport moderne</li>
                        <li>Des professeur expérimentés</li>
                        <li>Des conférences hebdomadaires</li>
                        <li>    Un vivier d'entreprises partenaires.</li>
                    </ul>
                </article>
            </aside>
            <aside>
                <Image src={Etudiant} alt="Etudiant" className='etudiant-img' />
            </aside>
          </section>
            
        </main>
        <div id='Page3'>
            <h1 className='Contact-title'>CONTACTEZ-NOUS</h1>
            <hr className='HR' />
        <ul className="contact-ul">
            <li className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg> 
<p className='svg'>034 49 006 09</p>
            </li>
            <li className='icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
            </li>
            <li className='icon'>
    <a href="https://web.facebook.com/photo/?fbid=268323225701977&set=a.185754203958880" target="_blank" rel="noopener noreferrer">
                            {/* Icône de Facebook */}
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
    </svg> 
    </a>
            </li>
          </ul>
        </div>
      </Container>
    )
};
