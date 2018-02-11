import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return(
      <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h4>ReportaBOT - Todos los izquierdos reservados - Te invitamos a clonar nuestro proyecto:  </h4>
            <nav>
              <ul className="nav nav-pills float-right">
                <li>
                  <a className="nav-link" href="https://github.com/gndx/reportaBot">
                     ReportaBot Backend
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="https://github.com/gndx/reportaBot-React">
                    ReportaBot FrontEnd
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="https://github.com/gndx/reportabot-admin">
                    ReportaBot Admin
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}

export default Footer;