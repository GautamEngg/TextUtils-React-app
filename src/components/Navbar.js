import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className= {`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.titles}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>

                {/* <li className="nav-link active" aria-current="page" href="/">
                  Home
                </li> */}
              </li>

              <li className="nav-item">
                <li className="nav-link" href="/about">
                  {props.aboutText}
                </li>
              </li>
            </ul>

            <div className="d-flex">
                <div className="bg-primary rounded mx-2 " onClick = {()=>{props.togleMode('primary')}} style = {{height : "30px", width :"35px", cursor : 'pointer'}}></div>
                <div className="bg-danger rounded mx-2 " onClick = {()=>{props.togleMode('Danger')}} style = {{height : "30px", width :"35px", cursor : 'pointer'}}></div>
                <div className="bg-success rounded mx-2 " onClick = {()=>{props.togleMode('Sucess')}} style = {{height : "30px", width :"35px", cursor : 'pointer'}}></div>
                <div className="bg-warning rounded mx-2 " onClick = {()=>{props.togleMode('Warning')}} style = {{height : "30px", width :"35px", cursor : 'pointer'}}></div>
            </div>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-primary " type="submit">
                Search
              </button>
            </form>
            <div className={`form-check form-switch text-${props.mode === 'light'? 'dark': 'light'} mx-3`}>
              <input className="form-check-input my-2" onClick = {()=>{props.togleMode(null)}} type="checkbox" id="flexSwitchCheckDefault"/>
              <label className="form-check-label my-1" htmlFor="flexSwitchCheckDefault"> Theme </label>
            </div>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {titles: PropTypes.string,
                    aboutText: PropTypes.string}

Navbar.defaultProps = {
    titles: 'set title here',
    aboutText: 'text here'
}