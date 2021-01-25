import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

import '../css/navbar.css'

let Inicio = '/Inicio'
let Categorias = '/Categorias'
let AcercaDeNosotros = '/Nosotros'
let FAQ = '/FAQ'
let Carrito = '/Carrito'
let LogIn = '/LogIn'

const Navbar = () => {
    (function() {

        // Definition of caller element
        var getTriggerElement = function(el) {
          var isCollapse = el.getAttribute('data-collapse');
          if (isCollapse !== null) {
            return el;
          } else {
            var isParentCollapse = el.parentNode.getAttribute('data-collapse');
            return (isParentCollapse !== null) ? el.parentNode : undefined;
          }
        };
      
        // A handler for click on toggle button
        var collapseClickHandler = function(event) {
          var triggerEl = getTriggerElement(event.target);
          // If trigger element does not exist
          if (triggerEl === undefined) {
            event.preventDefault();
            return false;
          }
      
          // If the target element exists
          var targetEl = document.querySelector(triggerEl.getAttribute('data-target'));
          if (targetEl) {
            triggerEl.classList.toggle('-active');
            targetEl.classList.toggle('-on');
          }
        };
      
        // Delegated event
        document.addEventListener('click', collapseClickHandler, false);
      
      })(document, window);

      const history = useHistory()

    let handleNavigation = (url) => {
        history.push(url)
    }

    return (  
        <React.Fragment>
            <div className='navbar-component'>
      
                <div className='navbar area'>
        
                <a onClick={() => handleNavigation(Inicio)}  className='brand'>Brand</a>
       
                <nav role='navigation' id='navigation' className='list'>
                    <a onClick={() => handleNavigation(Inicio)} className='item -link'>Inicio</a>
                    <a onClick={() => handleNavigation(Categorias)} className='item -link'>Explora</a>
                    <a onClick={() => handleNavigation(AcercaDeNosotros)} className='item -link'>Acerca de Nosotros</a>
                    <a onClick={() => handleNavigation(FAQ)} className='item -link'>FAQ</a>
                    <a onClick={() => handleNavigation(Carrito)} className='item -link'>Carrito</a>
                    <a onClick={() => handleNavigation(LogIn)} className='item -link'>Iniciar Sesion</a>
                    <span className='item'><i className='fa fa-search'></i></span>
                </nav>
        
                    <button data-collapse data-target='#navigation' className='toggle'>
          
                        <span class='icon'></span>
                    </button>
                </div>
            </div>

        </React.Fragment>
    );
}
 
export default Navbar;