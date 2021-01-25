import React, { Component, useState, useEffect } from 'react';

import {getArte, getArtistas} from '../mockData'

import SearchBar from '../components/Searchbar'
import PictureGrid from '../components/PictureGrid'
import PictureFrame from '../components/PictureFrame'

import '../css/categorias.css'

const Categorias = () => {

    let [term, setTerm] = useState('')
    let [categoria, setCategoria] = useState('')
    let [arte, setArte] = useState([])
    let [artistas, setArtistas] = useState([])

    useEffect(() => {
        setArte(getArte())
        setArtistas(getArtistas())
    }, [])

    let searchHandler = (e) => {
        setTerm(e.target.value)
    }
    
    let searchingFor = (term) => {
        return (x) => {
          return x.titulo.toLowerCase().includes(term.toLowerCase()) || !term || x.autor.toLowerCase().includes(term.toLowerCase()) ;
        };
      }

    let handleFilter = (categoria) => {
        setCategoria(categoria)
    }

    return (  
        <React.Fragment>
            <br/>
            <br/>
            <br/>
            <SearchBar
            updateSearch = {searchHandler}
            term = {term}
            />
            <div className='button_flex'>
            <button onClick={() => handleFilter('')} className='button margin_right'>
                    Todo
                <div className='button__horizontal'></div>
	            <div className='button__vertical'></div>
                </button>
                <button onClick={() => handleFilter('Impresionismo')} className='button margin_right'>
                    Impresionismo
                <div className='button__horizontal'></div>
	            <div className='button__vertical'></div>
                </button>
                <button onClick={() => handleFilter('Surrealismo')} className='button margin_right'>
                    Surrealismo
                <div className='button__horizontal'></div>
	            <div className='button__vertical'></div>
                </button>
                <button onClick={() => handleFilter('POP')} className='button margin_right'>
                    POP
                <div className='button__horizontal'></div>
	            <div className='button__vertical'></div>
                </button>
            </div>

            <div className='container'>
            {arte.filter(searchingFor(term)).filter( (arte) => {
                if (categoria == '') {
                    return arte
                } else {
                    return arte.categoria == categoria
                }
            }).map((picture) => (
                <PictureFrame
                picture={picture}
                />
            ))}

            </div>
            
        </React.Fragment>
    );
}
 
export default Categorias;