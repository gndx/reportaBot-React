import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <header>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <nav>
                  <ul className="nav nav-pills float-right">
                    <li><a className="nav-link" href="#about">Reportar Incidencia</a></li>
                  </ul>
                </nav>
                <div className="logo">
                  <h1>ReportaBot</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <h2><span>Contribuye a tu ciudad</span></h2>
                <a href='#contact' className="btn-contact">Reportar Incidencias</a>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
};

export default Header;