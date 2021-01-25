import React, { Component } from 'react';

import '../css/categorias.css'

const SearchBar = ({updateSearch, term}) => {
    return (  
        <React.Fragment>
            <div className="flex_parent">
                <test className="flex_child"/>
                    <input
                    className="centerbar raise button flex_child"
                    type="text"
                    value={term}
                    onChange={updateSearch}
                    placeholder="Search..."
                    />
                <test className="flex_child"/>
            </div>
        </React.Fragment>
    );
}
 
export default SearchBar;