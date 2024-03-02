import React from 'react'
import PropTypes from 'prop-types'

function Header(props) {
    // props is a javascript object which we are passing from our parent object to child object, which contains some data
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">{props.title}</a>
                {/* Since props was an object, and we passed title as the key in it, therefore we can access the value of that key using props.title */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">About</a>
                    </li>
                </ul>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}

                { props.searchBar ? <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> : "" }
                {/* This will check if searchBar variable passed to the child fxn by the parent function is true or not, if true
                    it will display the input box, otherwise will display an empty string*/}
                
                {/* 
                    { props.searchBar && <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>}
                    -> Another way of achieving the same effect 
                */}
                </div>
            </div>
        </nav>
    );
}

// defaultProps defines those values to be printed in case the prop is used in the component, but no value has been passed from the parent function
Header.defaultProps = {
    title: "My Default Title",
    // searchBar: true
}

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool.isRequired
    // This will require the user to enter this value as a prop everytime they use header component, either do this or supply a default balue for that prop
}
/*
    PropTypes help in strict typechecking during production and help in defining the datatypes of the prop keys we have used
*/

export default Header;