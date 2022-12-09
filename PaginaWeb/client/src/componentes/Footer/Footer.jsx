import "./Footer.css"
import logo from "../Menu/logo.png"

import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

export function Footer () {
  return (
    <CDBFooter className="">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark " >
              <img alt="logo" src={logo} width="100px" />
              <span className="ml-3 h5 font-weight-bold">TecMedex</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
                Entregamos recursos de alta calidad y herramientas para facilitar
                la gestion de sus consultas!
                Eligenos:)            
            </p>
            
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Servicios
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Reserva tu hora</CDBFooterLink>
              <CDBFooterLink href="/">Gestiona tus examenes</CDBFooterLink>
              <CDBFooterLink href="/">Servicio al cliente</CDBFooterLink>
              <CDBFooterLink href="/">Descarga tus examenes</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Exámenes
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Imagenológico</CDBFooterLink>
              <CDBFooterLink href="/">Laboratorio</CDBFooterLink>
              <CDBFooterLink href="/">Oftalmológico</CDBFooterLink>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              FQA
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              <CDBFooterLink href="/">Información del paciente</CDBFooterLink>
              <CDBFooterLink href="/">Centros clínicos</CDBFooterLink>
              <CDBFooterLink href="/">Seguridad de la cuenta</CDBFooterLink>
              <CDBFooterLink href="/ContactoEmpresa">Contacto</CDBFooterLink>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; TecMedex SPA, 2022. Todos los derechos reservados.</small>
      </CDBBox>
    </CDBFooter>
  );
};
