import React, { Component, useState } from 'react';

import '../css/faq.css'

const FAQ = () => {

    let [faq, setFAQ] = useState({
        var: [false, false, false, false, false, false]
    })

    const displayText = (i) => {
        setFAQ({
            ...faq,
            var: faq.var.map( (el, index) => {
                return index === i ? !(el) : el
            })
        });
        console.log('good test')
        console.log(faq)

    }

    return ( 
        <React.Fragment>
        <div className="faq__body faq__container">
            <h2 className="faq_header">Preguntas Frequentes</h2>
            <div className="faq_accordion">
                <div className="accordion-item">
                    <button
                        className="faq_button"
                        id="accordion-button-1"
                        aria-expanded={faq.var[0]}
                        onClick={() => displayText(0)}
                    >
                        <span className="accordion-title">
                        ¿Pregunta 1?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
                        suspendisse potenti.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="faq_button"
                        id="accordion-button-2"
                        aria-expanded={faq.var[1]}
                        onClick={() => displayText(1)}
                    >
                            <span className="accordion-title">
                            ¿Pregunta 2?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
                        suspendisse potenti.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="faq_button"
                        id="accordion-button-3"
                        aria-expanded={faq.var[2]}
                        onClick={() => displayText(2)}
                    >
                            <span className="accordion-title">
                            ¿Pregunta 3?
                            </span>
                            <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div class="accordion-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
                        suspendisse potenti.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="faq_button"
                        id="accordion-button-4"
                        aria-expanded={faq.var[3]}
                        onClick={() => displayText(3)}
                    >
                        <span className="accordion-title">
                        ¿Pregunta 4?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                    <div className="accordion-content">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
                        suspendisse potenti.
                        </p>
                    </div>
                </div>
                <div className="accordion-item">
                    <button
                        className="faq_button"
                        id="accordion-button-5"
                        aria-expanded={faq.var[4]}
                        onClick={() => displayText(4)}
                    >
                        <span className="accordion-title">
                        ¿Pregunta 5?
                        </span>
                        <span className="icon" aria-hidden="true"></span>
                    </button>
                <div className="accordion-content">
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Elementum sagittis vitae et leo duis ut. Ut tortor pretium viverra
                    suspendisse potenti.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </React.Fragment>
     );
}
 
export default FAQ;
